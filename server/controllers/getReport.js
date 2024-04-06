const mongoose = require('mongoose');
const Report = require('../models/Report');

const getReport = async (req, res) => {
    const { id } = req.params;
    try {
        const report = await Report.findById(id);
        if (!report) {
            return res.status(404).json({ message: "Report not found" });
        }
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getReport;
