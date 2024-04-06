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
    phone: {
        type: Number,
        required: true
    },
    c_c: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    history: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
});
const Report = mongoose.model('Report', reportSchema);
module.exports = Report;