import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  const message = 'Welcome to Rest API '
  res.send(message)
})

export = router
