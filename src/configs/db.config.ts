import mongoose from 'mongoose'

export const connectDB = (mongoURI: any) => {
  return mongoose.connect(mongoURI)
}

export default connectDB
