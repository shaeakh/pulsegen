const mongoose = require('mongoose');
const Doctor = require('../models/Doctor');

const addDoctor = async (req, res) => {
    const doctor = req.body;
    const newDoctor = new Doctor(doctor);
    try {
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = addDoctor;