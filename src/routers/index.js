const express = require('express');

const router = express.Router();

const schools = require('./school');
const users = require('./user');

router.use('/schools', schools);
router.use('/users', users);

module.exports = router;