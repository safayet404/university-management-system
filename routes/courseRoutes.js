const express = require('express')
const { createCourse, getAllCourse, getSingleCourse, updateCourse, deleteCourse } = require('../controllers/courseController')
const router = express.Router()


router.post('/create-course',createCourse)

router.get('/all-course',getAllCourse)
router.get('/single-course/:id',getSingleCourse)
router.patch('/update-course/:id',updateCourse)
router.delete('/delete-course/:id',deleteCourse)

module.exports = router

