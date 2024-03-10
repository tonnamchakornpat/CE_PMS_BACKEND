import express, { Request, Response } from 'express'
import {
  adminAddUserController,
  adminGetUserByIdController,
} from '../controllers'

const router = express.Router()

router.get('/user', (req: Request, res: Response) => {
  res.send('Hello world')
})
router.get('/user/:id', adminGetUserByIdController)
router.post('/user', adminAddUserController)
router.put('/user/:id')
router.delete('/user:id')

export = router
