import { Request, Response } from 'express'
import {
  adminAddUserService,
  adminGetUserByIdService,
  adminGetAllUsersService,
  adminDeleteUserByIdService,
  adminUpdateUserByIdService,
} from '../services'

export const adminAddUserController = (req: Request, res: Response) =>
  adminAddUserService(req, res)

export const adminGetUsersController = (req: Request, res: Response) =>
  adminGetAllUsersService(req, res)

export const adminGetUserByIdController = (req: Request, res: Response) =>
  adminGetUserByIdService(req, res)

export const adminDeleteUserByIdController = (req: Request, res: Response) =>
  adminDeleteUserByIdService(req, res)

export const adminUpdateUserByIdController = (req: Request, res: Response) =>
  adminUpdateUserByIdService(req, res)
