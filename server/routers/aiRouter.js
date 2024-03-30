const express = require('express');
const patientChat = require('../controllers/patientChat');
const genReport = require('../controllers/genReport');
const airoute = express.Router();
airoute.post('/chat', patientChat);
airoute.post('/report',genReport);
module.exports = airoute;