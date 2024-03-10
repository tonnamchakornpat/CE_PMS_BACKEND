import mongoose from 'mongoose'
import { UserSchema } from '../models'
import { ITeacher } from '../interfaces'

export const getUserById = async (id: string) => {
  const User = mongoose.model('User', UserSchema)
  const user = await User.findById(id)
  if (!user) {
    throw new Error('User not found')
  }
  return user
}

export const createUser = async (userData: ITeacher) => {
  const User = mongoose.model('User', UserSchema)
  const user = new User({
    ...userData,
  })
  await user.save()
  if (!user) throw new Error("Can't create user")
  return user
}
