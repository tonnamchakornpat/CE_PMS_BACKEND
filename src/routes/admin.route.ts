import express from 'express'
import {
  adminAddUserController,
  adminGetUserByIdController,
  adminGetUsersController,
  adminDeleteUserByIdController,
  adminUpdateUserByIdController,
} from '../controllers'

const router = express.Router()

router.get('/users', adminGetUsersController)
router.get('/users:id', adminGetUserByIdController)
router.post('/users', adminAddUserController)
router.put('/users/:id', adminUpdateUserByIdController)
router.delete('/users/:id', adminDeleteUserByIdController)

export = router
