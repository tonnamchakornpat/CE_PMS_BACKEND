import express from 'express'

import homeRoute from '../routes/home.route'
import adminRoute from '../routes/admin.route'

const router = express.Router()

router.use('/', homeRoute)
router.use('/admin', adminRoute)

export default router
