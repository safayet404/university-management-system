const mongoose = require('mongoose'); 

const { Schema } = mongoose;

const departmentSchema = new Schema({
    name: { type: String, required: true, unique: true },
    head: { type: Schema.Types.ObjectId, ref: 'Faculty' }, // Head of the department
    coursesOffered: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Department', departmentSchema);