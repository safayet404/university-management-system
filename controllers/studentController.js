const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel')


const createStudent = asyncHandler(async(req,res)=>{
    try{
        const addStudent = await Student.create(req.body)
        res.json(addStudent)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllStudent = asyncHandler(async(req,res)=>{
    try{
        const allStudent = await Student.find()
        res.json(allStudent)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleStudent = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleStudent = await Student.findById(id)
        res.json(singleStudent)

    }catch(error)
    {
        throw new Error(error)
    }
})

const updateStudent = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const studentUpdate = await Student.findByIdAndUpdate(id,req.body,{new:true})
        res.json(studentUpdate)

    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteStudent = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const studentDelete = await Student.findByIdAndDelete(id)
        res.json(studentDelete)

    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createStudent,
    getAllStudent,
    getSingleStudent,
    updateStudent,
    deleteStudent
}