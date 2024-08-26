const asyncHandler = require('express-async-handler')
const Grade = require('../models/gradeModel')

const createGrade = asyncHandler(async(req,res)=>{
    try{
        const addGrade = await Grade.create(req.body)
        res.json(addGrade)

    }catch(error)
    {
        throw new Error(error)
    }
})


const getAllGrade = asyncHandler(async(req,res)=>{
    try{
        const allGrade = await Grade.find()
        res.json(allGrade)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getSingleGrade = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleGrade = await Grade.findById(id)
        res.json(singleGrade)
    }catch(error)
    {
        throw new Error(error)
    }
})


const updateGrade = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const gradeUpdate = await Grade.findByIdAndUpdate(id,req.body,{new:true})
        res.json(gradeUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})


const deleteGrade = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const gradeDelete = await Grade.findByIdAndDelete(id)
        res.json(gradeDelete)

    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports={
    createGrade,
    getAllGrade,
    getSingleGrade,
    updateGrade,
    deleteGrade
}


