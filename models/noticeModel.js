const mongoose = require('mongoose');
const { Schema } = mongoose;

const noticeSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Faculty' },
    audience: { type: String, enum: ['All', 'Students', 'Faculty', 'Department'], default: 'All' },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department' }, // Optional: Targeted department
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notice', noticeSchema);
