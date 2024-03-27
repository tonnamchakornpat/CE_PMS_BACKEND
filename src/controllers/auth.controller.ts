import { Request, Response } from 'express'
import { userLoginService } from '../services'

export const loginController = (req: Request, res: Response) =>
  userLoginService(req, res)
