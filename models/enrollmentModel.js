const mongoose = require('mongoose'); 
const { Schema } = mongoose;


const enrollmentSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    enrollmentDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Enrolled', 'Completed', 'Withdrawn'], default: 'Enrolled' }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);