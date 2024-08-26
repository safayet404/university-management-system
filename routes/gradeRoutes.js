const express = require('express')
const { createGrade, getAllGrade, getSingleGrade, updateGrade, deleteGrade } = require('../controllers/gradeController')
const router = express.Router()


router.post('/create-grade',createGrade)

router.get('/all-grade',getAllGrade)
router.get('/single-grade/:id',getSingleGrade)
router.put('/update-grade/:id',updateGrade)
router.delete('/delete-grade/:id',deleteGrade)

module.exports = router

