import { NextFunction, Request, Response } from 'express'
import { getUserById, createUser } from '../repositories/userRepository'

export const addUserService = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const user = await createUser(userData)
    res.json(user)
  } catch (error) {
    console.log('Add user error:' + error)
  }
}

export const getUserByIdService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)
    res.json(user)
  } catch (error) {
    console.log('Find user failed:' + error)
  }
}
