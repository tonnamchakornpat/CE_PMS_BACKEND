import app from './app'
import { connectDB } from './configs'
import logger from './pkg/logger'

// mongoDB and Starting server
export const startServer = async () => {
  try {
    const conn = await connectDB(process.env.MONGO_CONNECT_URI)
    console.log(`MongoDB database connection ${conn?.connection?.host}`)

    app?.listen(process.env.PORT, () => {
      console.log(`app listening on port ${process.env.PORT}`)
    })
  } catch (error: any) {
    console.log('MongoDB connection error.', error)
    logger.error({
      message: `MongoDB connection error. Please make sure MongoDB is running: ${error?.message}`,
    })
  }
}

startServer()

export default app
