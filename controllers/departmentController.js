const asyncHandler = require('express-async-handler')
const Department = require('../models/departmentModel')

const createDepartment = asyncHandler(async(req,res)=>{
    try{
        const addDepartment = await Department.create(req.body)
        res.json(addDepartment)

    }catch(error)
    {
        throw new Error(error)
    }
})


const getAllDepartment = asyncHandler(async(req,res)=>{
    try{
        const allDepartment = await Department.find()
        res.json(allDepartment)

    }catch(error)
    {
        throw new Error(error)
    }
})


const getSingleDepartment = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleDepartment = await Department.findById(id)
        res.json(singleDepartment)

    }catch(error)
    {
        throw new Error(error)
    }
})


const updateDepartment = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const departmentUpdate = await Department.findByIdAndUpdate(id,req.body,{new:true})
        res.json(departmentUpdate)

    }catch(error)
    {
        throw new Error(error)
    }
})


const deleteDepartment = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const departmentDelete = await Department.findByIdAndDelete(id)
        res.json(departmentDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})


module.exports = {
    createDepartment,
    getAllDepartment,
    getSingleDepartment,
    updateDepartment,
    deleteDepartment
}