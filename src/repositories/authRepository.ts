import mongoose from 'mongoose'
import { UserSchema } from '../models'

const Users = mongoose.model('Users', UserSchema)

export const checkUser = async (username: string) => {
  const result = await Users.findOne({ username: username })
  return result
}
