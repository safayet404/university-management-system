const asyncHandler = require('express-async-handler')
const Assignment = require('../models/assignmentModel')

const createAssignment  = asyncHandler(async(req,res)=>{
    try{
        const addAssignment = await Assignment.create(req.body)
        res.json(addAssignment)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllAssignment = asyncHandler(async(req,res)=>{
    try{
        const allAssignment = await Assignment.find().sort({_id : - 1});
        res.json(allAssignment)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getSingleAssignment = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleAssignment = await Assignment.findById(id)
        res.json(singleAssignment)

    }catch(error)
    {
        throw new Error(error)
    }
})


const updateAssignment = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const assignmentUpdate = await Assignment.findByIdAndUpdate(id,req.body,{new : true})
        res.json(assignmentUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})


const deleteAssignment = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const assignmentDelete = await Assignment.findByIdAndDelete(id)
        res.json(assignmentDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})


module.exports ={
    createAssignment,
    getAllAssignment,
    getSingleAssignment,
    updateAssignment,
    deleteAssignment
}