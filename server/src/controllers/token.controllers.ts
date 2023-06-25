import { Request, Response } from 'express'

import { UserCredentials } from '../schemas'
import { getUser } from '../services'
import { sign } from '../utilities'

const getTokenHandler = async (req: Request, res: Response) => {
  try {
    const credentials = req.query as UserCredentials

    const user = await getUser(credentials.name)

    if (!user) throw new Error('User not found')

    const isPasswordCorrect = await user.comparePassword(credentials.password)

    if (!isPasswordCorrect) throw new Error('Incorrect password')

    const token = sign(String(user._id))

    res.status(200).send(token)
  } catch (error: any) {
    return res.status(400).send(error.message)
  }
}

export { getTokenHandler }
