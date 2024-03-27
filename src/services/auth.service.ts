import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { checkUser } from '../repositories'

export const userLoginService = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    const result: any = await checkUser(username)
    const match = await bcrypt.compare(password, result.password)

    if (!match) {
      res.status(400).json({
        message: 'login failed ( wrong email or password )',
      })
    }

    res.json(result)
  } catch (error) {
    console.log('userLogin Error :', error)

    res.status(401).json({
      message: 'login failed',
      error,
    })
  }
}
