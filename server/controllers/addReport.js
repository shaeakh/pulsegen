const mongoose = require('mongoose');
const Report = require('../models/Report');

const addReport = async (req, res) => {
    const report = req.body;
    const newReport = new Report(report);
    try {
        await newReport.save();
        res.status(201).json(newReport);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports = addReport;