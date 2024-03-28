import { NextFunction, Response, Request } from 'express'
import jwt from 'jsonwebtoken'
import { getUserById } from '../../repositories'

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers['authorization']
    const secretKey = process.env.TOKEN_SECRET
    if (!secretKey) {
      return res.status(500).json({ error: 'TOKEN_SECRET is not defined' })
    }
    let authToken = ''
    if (authHeader) {
      authToken = authHeader.split(' ')[1]
    }
    const tokenData: any = jwt.verify(authToken, secretKey)
    const result = await getUserById(tokenData.id)

    next()
  } catch (error) {
    console.log('error', error)
    res.status(403).json({
      message: 'authentication fail',
      error,
    })
  }
}

export default { isAuth }
