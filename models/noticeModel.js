const mongoose = require('mongoose');
const { Schema } = mongoose;

const noticeSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    audience: { type: String, enum: ['All', 'Students', 'Faculty', 'Department'], default: 'All' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notice', noticeSchema);
