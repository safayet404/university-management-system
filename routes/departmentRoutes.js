const express = require('express')
const { createDepartment, getAllDepartment, getSingleDepartment, updateDepartment, deleteDepartment } = require('../controllers/departmentController')
const router = express.Router()


router.post('/create-department',createDepartment)

router.get('/all-department',getAllDepartment)
router.get('/single-department/:id',getSingleDepartment)
router.put('/update-department/:id',updateDepartment)
router.delete('/delete-department/:id',deleteDepartment)

module.exports = router

