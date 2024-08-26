const express = require('express')
const { createAdmin, adminLogin, getAllAdmin, getSingleAdmin, updateAdmin, deleteAdmin, adminLogout } = require('../controllers/adminController')
const { isAdmin } = require('../middleware/authMiddleare')
const router = express.Router()


router.post('/create-admin',isAdmin,createAdmin)

router.post("/admin-login",adminLogin)
router.post("/admin-logout",adminLogout)


router.get('/all-admin',getAllAdmin)
router.get('/single-admin/:id',getSingleAdmin)
router.patch('/update-admin/:id',isAdmin,updateAdmin)
router.delete('/delete-admin/:id',isAdmin,deleteAdmin)

module.exports = router


