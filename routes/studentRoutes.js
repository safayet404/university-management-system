const express = require('express')
const { createStudent, getAllStudent, getSingleStudent, updateStudent, deleteStudent } = require('../controllers/studentController')
const router = express.Router()


router.post('/create-student',createStudent)
router.get('/all-student',getAllStudent)
router.get('/single-student/:id',getSingleStudent)
router.put('/update-student/:id',updateStudent)
router.delete('/delete-student/:id',deleteStudent)

module.exports = router

