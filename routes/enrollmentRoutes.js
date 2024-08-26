const express = require('express')
const { createEnrollment, getAllEnrollment, getSingleEnrollment, updateEnrollment, deleteEnrollment } = require('../controllers/enrollmentController')
const router = express.Router()


router.post('/create-enrollment',createEnrollment)

router.get('/all-enrollment',getAllEnrollment)
router.get('/single-enrollment/:id',getSingleEnrollment)
router.put('/update-enrollment/:id',updateEnrollment)
router.delete('/delete-enrollment/:id',deleteEnrollment)

module.exports = router

