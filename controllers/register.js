const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
	const user = await User.findOrCreate({
		where    : {
			email : req.body.email
		},
		defaults : {
			name         : req.body.name,
			username     : req.body.username,
			passwordHash : bcrypt.hashSync(req.body.password)
		}
	});
	console.log(user[1])
	if (user[1]) {
		req.session.userId = user[0].id;
		res.redirect('/home');
	} else res.render('signup', { errors: ["sorry, email taken"] })
});

module.exports = router;
