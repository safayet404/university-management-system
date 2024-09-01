const mongoose = require('mongoose'); 

const { Schema } = mongoose;

const departmentSchema = new Schema({
    name: { type: String, required: true, unique: true },
    head: { type: String, required : true},
    
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Department', departmentSchema);