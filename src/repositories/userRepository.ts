import mongoose from 'mongoose'
import { UserSchema } from '../models'
import { ITeacher } from '../interfaces'

const Users = mongoose.model('Users', UserSchema)

export const getUsers = async () => {
  const users = await Users.find()
  if (!users) throw new Error('Users not found')
  return users
}
export const getUserById = async (id: string) => {
  const users = await Users.findById(id)
  if (!users) {
    throw new Error('User not found')
  }
  return users
}

export const createUser = async (userData: ITeacher) => {
  const user = new Users({
    ...userData,
  })
  await user.save()
  if (!user) throw new Error("Can't create user")
  return user
}

export const deleteUserById = async (id: string) => {
  const isDeleted = await Users.findByIdAndDelete(id)
  if (!isDeleted) throw new Error("Can't delete user")
  return isDeleted
}

export const updateUserById = async (id: string, updateData: any) => {
  const update = [{ _id: id }, { ...updateData, updatedAt: new Date(0) }]
  const user = await Users.findOneAndUpdate(...update)
  if (!user) throw new Error("can't update user")
  user.updateAt
  return user
}
