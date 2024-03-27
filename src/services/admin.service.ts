import { Request, Response } from 'express'
import {
  getUserById,
  getUsers,
  createUser,
  deleteUserById,
  updateUserById,
} from '../repositories'
import bcrypt from 'bcrypt'

export const adminAddUserService = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const saltRounds = 10

    if (userData.password == undefined) throw new Error('required password')
    const passwordHash = await bcrypt.hash(userData.password, saltRounds)
    userData.password = passwordHash

    const user = await createUser(userData)
    res.json(user)
  } catch (error) {
    console.log('Add user error:' + error)
  }
}

export const adminGetAllUsersService = async (req: Request, res: Response) => {
  try {
    const users = await getUsers()
    res.json(users)
  } catch (error) {
    console.log('Get users failed:', error)
  }
}

export const adminGetUserByIdService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await getUserById(id)
    res.json(user)
  } catch (error) {
    console.log('Find user failed:' + error)
  }
}

export const adminDeleteUserByIdService = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params
    const user = await deleteUserById(id)
    res.send(`Delete ${user.name}`)
  } catch (error) {
    console.log('Error deleting user:' + error)
  }
}

export const adminUpdateUserByIdService = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const user = await updateUserById(id, updateData)
    res.json(user)
  } catch (error) {
    console.log('Error updating user:' + error)
  }
}
