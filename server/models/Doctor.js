const mongoose = require('mongoose');
const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    badge: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    exp: {
        type: Number,
        required: true
    },
    r_n: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    c_fee: {
        type: Number,
        required: true
    },
    isFemale: {
        type: Boolean,
        required: true
    }
});
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;