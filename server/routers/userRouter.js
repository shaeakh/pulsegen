const express = require('express');
const getDoctor = require('../controllers/getDoctor');
const addDoctor = require('../controllers/addDoctor');
const userRoute = express.Router();
userRoute.get('/doctor',getDoctor);
userRoute.post('/doctor',addDoctor);
module.exports = userRoute;