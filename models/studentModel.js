const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt')
var studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        
    },
    password : {
        type : String,
        required : true
    },
    mobile:{
        type:String,
        required:true,
        
    },
    studentId:{
        type:String,
        required:true,
        unique : true
    },
    department : {
        type : String,
        required : true
    },
    role :{
        type : String,
        default : "student"
    },
    dateOfBirth : {type:String},
    address : {type : String},
    contactNumber : {type : String},
    gurdianDetails : {
        name : {type : String},
        contactNumber : {type : String}
    },
    createdAt : {type : Date,default : Date.now}
});


// studentSchema.pre('save',async function(next){
//     const salt = await bcrypt.genSaltSync(10)
//     this.password = await bcrypt.hash(this.password,salt)
// })

// studentSchema.methods.isPasswordMatched = async function(enterdPassword){
//     return await bcrypt.compare(enterdPassword,this.password)
// }

module.exports = mongoose.model('Student', studentSchema);