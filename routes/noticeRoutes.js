const express = require('express')
const { createNotice, getAllNotice, getSingleNotice, updateNotice, deleteNotice } = require('../controllers/noticeController')
const router = express.Router()


router.post('/create-notice',createNotice)

router.get('/all-notice',getAllNotice)
router.get('/single-notice/:id',getSingleNotice)
router.put('/update-notice/:id',updateNotice)
router.delete('/delete-notice/:id',deleteNotice)

module.exports = router

