const asyncHandler = require('express-async-handler')
const Course = require('../models/courseModel')

const createCourse = asyncHandler(async(req,res)=>{
    try{
        const addCourse = await Course.create(req.body)
        res.json(addCourse)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getAllCourse = asyncHandler(async(req,res)=>{
    try{
        const allCourse = await Course.find().sort({_id : - 1});
        res.json(allCourse)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getSingleCourse = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleCourse = await Course.findById(id)
        res.json(singleCourse)

    }catch(error)
    {
        throw new Error(error)
    }
})


const updateCourse = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const courseUpdate = await Course.findByIdAndUpdate(id,req.body,{new :true})
        res.json(courseUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})


const deleteCourse = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const courseDelete = await Course.findByIdAndDelete(id)
        res.json(courseDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})


module.exports = {
    createCourse,
    getAllCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse
}

