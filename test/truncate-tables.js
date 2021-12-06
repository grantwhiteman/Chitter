require('dotenv').config();
const { User } = require('../models');

const truncateTables = () => {
	console.log('truncating tables');
	User.destroy({ truncate: true, cascade: true });
};

module.exports = truncateTables;