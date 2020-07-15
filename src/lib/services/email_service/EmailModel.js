const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    receipients: { type: Array, required: true },
    subject: { type: String, required: true },
    is_important: { type: Boolean, default: false },
    message: { type: String, required: true },
    time_stamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Email', EmailSchema);