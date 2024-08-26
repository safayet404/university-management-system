const asyncHandler = require('express-async-handler')
const Notice = require('../models/noticeModel')


const createNotice = asyncHandler(async(req,res)=>{
    try{
        const addNotice = await Notice.create(req.body)
        res.json(addNotice)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getAllNotice = asyncHandler(async(req,res)=>{
    try{
        const allNotice = await Notice.find()
        res.json(allNotice)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getSingleNotice = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleNotice = await Notice.findById(id)
        res.json(singleNotice)

    }catch(error)
    {
        throw new Error(error)
    }
})


const updateNotice = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const noticeUpdate = await Notice.findByIdAndUpdate(id,req.body,{new :true})
        res.json(noticeUpdate)

    }catch(error)
    {
        throw new Error(error)
    }
})


const deleteNotice = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const noticeDelete = await Notice.findByIdAndDelete(id)
        res.json(noticeDelete)   
    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
    createNotice,
    getAllNotice,
    getSingleNotice,
    updateNotice,
    deleteNotice
}
