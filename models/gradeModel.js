const mongoose = require('mongoose'); 
const { Schema } = mongoose;


const gradeSchema = new Schema({
    studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    grade: { type: String, required: true }, // e.g., "A", "B", "C"
    gradePoint: { type: Number, required: true }, // e.g., 4.0, 3.5
    awardedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Grade', gradeSchema);