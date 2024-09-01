const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt')

var facultySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    employeeId : {
        type : String,
        required : true,
        unique : true
    },
    role : {
        type : String,
        default : "faculty"
    },
    department : {
        type : String,
        required : true,
    },
    designation : {
        type : String,
    },
    dateOfJoining : {
        type : String,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

facultySchema.pre('save',async function(next){
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password,salt)
})

facultySchema.methods.isPasswordMatched = async function(enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password)
}
module.exports = mongoose.model('Faculty', facultySchema);