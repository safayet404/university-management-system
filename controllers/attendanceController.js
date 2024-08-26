const asyncHandler = require('express-async-handler')
const Attendance = require('../models/attendanceModel')

const createAttendance = asyncHandler(async(req,res)=>{
    try{
        const addAttendance = await Attendance.create(req.body)
        res.json(addAttendance)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getAllAttendance = asyncHandler(async(req,res)=>{
    try{
        const allAttendance = await Attendance.find()
        res.json(allAttendance)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getSingleAttendance = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleAttendance = await Attendance.findById(id)
        res.json(singleAttendance)
    }catch(error)
    {
        throw new Error(error)
    }
})


const updateAttendance = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const updateAttendance = await Attendance.findByIdAndUpdate(id,req.body,{new:true})
        res.json(updateAttendance)

    }catch(error)
    {
        throw new Error(error)
    }
})


const deleteAttendance = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const attendanceDelete = await Attendance.findByIdAndDelete(id)
        res.json(attendanceDelete)
    }catch(error)
    {
        throw new Error(error)
    }
})


module.exports ={
    createAttendance,
    getAllAttendance,
    getSingleAttendance,
    updateAttendance,
    deleteAttendance
}