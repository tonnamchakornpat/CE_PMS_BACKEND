import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { checkUser } from '../repositories'

export const userLoginService = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    const result: any = await checkUser(username)

    if (result) {
      const match = await bcrypt.compare(password, result.password)
      if (match) {
        const secretKey = process.env.TOKEN_SECRET
        if (!secretKey) {
          return res.status(500).json({ error: 'TOKEN_SECRET is not defined' })
        }
        const payload = { id: result.id, name: result.name, role: result.role }

        const token = jwt.sign(payload, secretKey, { expiresIn: '4h' })
        return res.json({
          message: 'login successful',
          token,
        })
      }
    }
    res.status(400).json({
      message: 'login failed ( wrong email or password )',
    })
  } catch (error) {
    console.log('userLogin Error :', error)

    res.status(401).json({
      message: 'login failed',
      error,
    })
  }
}
