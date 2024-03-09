import app from './app'

// mongoDB and Starting server
export const startServer = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`app listening on port ${process.env.PORT}`)
    })
  } catch (error: any) {
    console.log('Error :', error)
  }
}

startServer()

export default app
