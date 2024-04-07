const mongoose = require('mongoose');
const reportSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    phone: {
        type: Number,
    },
    c_c: {
        type: String,
    },
    summary: {
        type: String,
    },
    history: {
        type: String,
    },
    date: {
        type: String,
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    }
});
const Report = mongoose.model('Report', reportSchema);
module.exports = Report;