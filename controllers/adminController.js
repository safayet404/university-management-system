const asyncHandler = require('express-async-handler')
const Admin = require("../models/adminModel")


const createAdmin = asyncHandler(async(req,res)=>{
    try{
        const admin = await Admin.create(req.body)
        res.json(admin)

    }catch(error)
    {
        throw new Error(error)
    }
})

const adminLogin = asyncHandler(async(req,res)=>{
    const {email,password} = req.body

    try{
        const admin = await Admin.findOne({email})
        if(!admin)
        {
            res.status(404)
            throw new Error("Admin Not Found")
        }

        const isMatch = await admin.isPasswordMatched(password)
        if(!isMatch)
        {
            res.status(400)
            throw new Error("Invalid Credentials")
        }

        req.session.adminId = admin._id;
        res.status(200).json({
            message: 'Login successful',
            admin: { id: admin._id, email: admin.email }
        });


    }catch(error)
    {
        throw new Error(error)
    }
})

const adminLogout = asyncHandler(async(req,res)=>{
    try{
        req.session.destroy(err =>{
            if(err)
            {
                throw new Error('Failed to log out')
            }
        })

        res.clearCookie('connect.sid')
        res.json({message : "Logout Successful"})

    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllAdmin = asyncHandler(async(req,res)=>{
    try{
        const allAdmin = await Admin.find().sort({_id : - 1});
        res.json(allAdmin)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleAdmin = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleAdmin = await Admin.findById(id)
        res.json(singleAdmin)

    }catch(error)
    {
        throw new Error(error)
    }
})

const updateAdmin = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const adminUpdate = await Admin.findByIdAndUpdate(id,req.body,{new:true})
        res.json(adminUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteAdmin = asyncHandler(async(req,res)=>{
    try{

        
        const {id} = req.params
        const admin = await Admin.findById(id)

        if(!admin)
        {
            res.json({message : "Already Deleted"})
        }
        else
        {

            const adminDelete = await Admin.findByIdAndDelete(id)
            res.json(adminDelete)
        }

    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createAdmin,
    getAllAdmin,
    getSingleAdmin,
    updateAdmin,
    deleteAdmin,
    adminLogin,
    adminLogout

}
// asyncHandler(async(req,res)=>{
//     try{

//     }catch(error)
//     {
//         throw new Error(error)
//     }
// })