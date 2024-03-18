import { Schema } from 'mongoose'
import { ITeacher } from '../interfaces'

export const UserSchema: Schema<ITeacher> = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: { type: String },
    name: { type: String },
    role: { type: Number, required: true },
  },
  { timestamps: true }
)
