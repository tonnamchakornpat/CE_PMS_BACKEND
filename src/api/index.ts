import express from 'express'

import homeRoute from '../routes/home.route'
import adminRoute from '../routes/admin.route'
import authRoute from '../routes/auth.route'

const router = express.Router()

router.use('/', homeRoute)
router.use('/admin', adminRoute)
router.use('/auth', authRoute)

export default router
