const mongoose = require('mongoose');
const reportSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    c_c: {
        type: String,
        required: true
    },
    illness_summary: {
        type: String,
        required: true
    },
    history: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});
const Report = mongoose.model('Report', reportSchema);
module.exports = Report;