import express from 'express'

import homeRoute from '../routes/home.route'

const router = express.Router()

router.use('/', homeRoute)

export default router
