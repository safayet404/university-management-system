const mongoose = require('mongoose'); 
const { Schema } = mongoose;


const courseSchema = new Schema({
    courseCode: { type: String, required: true, unique: true },
    courseName: { type: String, required: true },
    credits: { type: Number, required: true },
    department: { type: String, required: true },
    studentsEnrolled: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
    // schedule: {
    //     days: { type: [String] }, // e.g., ["Monday", "Wednesday"]
    //     time: { type: String }, // e.g., "10:00 AM - 11:30 AM"
    //     location: { type: String } // e.g., "Room 101"
    // },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);