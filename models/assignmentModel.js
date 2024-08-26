const mongoose = require('mongoose');
const { Schema } = mongoose;

const assignmentSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    assignedDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true },
    submissions: [{
        studentId: { type: Schema.Types.ObjectId, ref: 'Student' },
        fileUrl: { type: String },
        submittedDate: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Assignment', assignmentSchema);
