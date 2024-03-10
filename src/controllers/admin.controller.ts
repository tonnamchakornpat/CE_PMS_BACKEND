import { Request, Response } from 'express'
import { addUserService, getUserByIdService } from '../services'

export const adminAddUserController = (req: Request, res: Response) =>
  addUserService(req, res)

export const adminGetUserByIdController = (req: Request, res: Response) =>
  getUserByIdService(req, res)
