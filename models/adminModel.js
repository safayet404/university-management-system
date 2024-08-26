const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt')
var adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true},
    password: { type: String, required: true },
    role: { type: String, default:"admin", required: true },
    createdAt: { type: Date, default: Date.now }
});

adminSchema.pre('save',async function(next){
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password,salt)
})

adminSchema.methods.isPasswordMatched = async function(enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password)
}

module.exports = mongoose.model('Admin', adminSchema);