import mongoose from 'mongoose'
import { UserSchema } from '../models'

const Users = mongoose.model('Users', UserSchema)

export const checkUser = async (username: string) => {
  const result = await Users.findOne({ username: username })
  if (!result) throw new Error("can't find user")
  return result
}
