const express = require('express');
const patientChat = require('../controllers/patientChat');
const airoute = express.Router();
airoute.post('/chat', patientChat);
module.exports = airoute;