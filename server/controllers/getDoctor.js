const mongoose = require('mongoose');
const Doctor = require('../models/Doctor');

const getDoctor = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = getDoctor;