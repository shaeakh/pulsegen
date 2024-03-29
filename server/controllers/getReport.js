const mongoose = require('mongoose');
const Report = require('../models/Report');

const getReport = async (req, res) => {
    try {
        const report = await Report.findone({ _id: req.params.id });
        res.status(200).json(report);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = getReport;