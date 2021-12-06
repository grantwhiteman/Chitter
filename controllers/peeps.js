const express = require('express');
const router = express.Router();
const { Peep } = require('../models');

router.post('/', async (req, res) => {
	await Peep.create({
		text   : req.body.peep,
		UserId : req.session.userId
	});
	res.redirect('/home');
});

module.exports = router;