const express = require('express')
const { createAttendance, getAllAttendance, updateAttendance, deleteAttendance, getSingleAttendance } = require('../controllers/attendanceController')
const router = express.Router()


router.post('/create-attendance',createAttendance)


router.get('/all-attendance',getAllAttendance)
router.get('/single-attendance/:id', getSingleAttendance)
router.patch('/update-attendance/:id',updateAttendance)
router.delete('/delete-attendance/:id',deleteAttendance)

module.exports = router

