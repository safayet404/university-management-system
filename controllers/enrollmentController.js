const asyncHandler = require('express-async-handler')
const Enrollment = require('../models/enrollmentModel')

const createEnrollment = asyncHandler(async(req,res)=>{
    try{
        const addEnrollment = await Enrollment.create(req.body)
        res.json(addEnrollment)

    }catch(error)
    {
        throw new Error(error)
    }
})


const getAllEnrollment = asyncHandler(async(req,res)=>{
    try{
        const allEnrollment = await Enrollment.find()
        res.json(allEnrollment)

    }catch(error)
    {
        throw new Error(error)
    }
})


const getSingleEnrollment = asyncHandler(async(req,res)=>{
    try{

        const {id} = req.params
        const singleEnrollment = await Enrollment.findById(id)
        res.json(singleEnrollment)

    }catch(error)
    {
        throw new Error(error)
    }
})


const updateEnrollment = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const enrollmentUpdate = await Enrollment.findByIdAndUpdate(id,req.body,{new:true})
        res.json(enrollmentUpdate)

    }catch(error)
    {
        throw new Error(error)
    }
})


const deleteEnrollment = asyncHandler(async(req,res)=>{
    try{
        const enrollmentDelete = await Enrollment.findByIdAndDelete(id)
        res.json(enrollmentDelete) 

    }catch(error)
    {
        throw new Error(error)
    }
})


module.exports ={
    createEnrollment,
    getAllEnrollment,
    getSingleEnrollment,
    updateEnrollment,
    deleteEnrollment
}