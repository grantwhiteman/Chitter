const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcryptjs');

router.get('/', function(req, res) {
	res.render('login');
});

router.post('/', async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    req.session.userId = user.id;
	res.redirect('/home');
  }
  else {
    res.render('login', { errors: ["sorry, details not valid"] })
  }
})

module.exports = router;
