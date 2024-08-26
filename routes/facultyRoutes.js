const express = require('express')
const { createFaculty, getAllFaculty, getSingleFaculty, updateFaculty, deleteFaculty } = require('../controllers/facultyController')
const router = express.Router()


router.post('/create-faculty',createFaculty)
router.get('/all-faculty',getAllFaculty)
router.get('/single-faculty/:id',getSingleFaculty)
router.put('/update-faculty/:id',updateFaculty)
router.delete('/delete-faculty/:id',deleteFaculty)

module.exports = router

