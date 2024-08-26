const asyncHandler = require('express-async-handler')
const Faculty = require('../models/facultyModel')

const createFaculty = asyncHandler(async(req,res)=>{
    try{
        const createFaculty = await Faculty.create(req.body)
        res.json(createFaculty)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllFaculty = asyncHandler(async(req,res)=>{
    try{
        const allFaculty = await Faculty.find()
        res.json(allFaculty)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleFaculty = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleFaculty = await Faculty.findById(id)
        res.json(singleFaculty)

    }catch(error)
    {
        throw new Error(error)
    }
})



const updateFaculty = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const facultyUpdate = await Faculty.findByIdAndUpdate(id,req.body,{new:true})
        res.json(facultyUpdate)

    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteFaculty = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const facultyDelete = await Faculty.findByIdAndDelete(id)
        res.json(facultyDelete)

    }catch(error)
    {
        throw new Error(error)
    }
})


module.exports = {
    createFaculty,
    getAllFaculty,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty
}