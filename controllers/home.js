const express = require('express');
const router = express.Router();
const { Peep } = require('../models');

router.get('/', async (req, res) => {
	const peeps = await Peep.findAll({
		include: {
			all: true
		},
		order: [
			['createdAt', 'DESC']
		]
	})
	res.render('home', { peeps: peeps });
});

module.exports = router;