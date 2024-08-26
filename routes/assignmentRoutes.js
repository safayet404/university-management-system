const express = require('express')
const { createAssignment, getAllAssignment, getSingleAssignment, updateAssignment, deleteAssignment } = require('../controllers/assignmentController')
const router = express.Router()


router.post('/create-assignment',createAssignment)
router.get('/all-assignment',getAllAssignment)
router.get('/single-assignment/:id',getSingleAssignment)
router.patch('/update-assignment/:id',updateAssignment)
router.delete('/delete-assignment/:id',deleteAssignment)

module.exports = router

