const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    req.session.userId = undefined;
    res.redirect('/home')
})

module.exports = router