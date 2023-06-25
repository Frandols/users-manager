import { Request, Response, NextFunction } from 'express'

import { verify } from '../utilities'

const requireToken = async (
  req: Request & { user?: string },
  res: Response,
  next: NextFunction
) => {
  try {
    const authorization = req.headers.authorization

    if (!authorization) throw new Error('Authorization required')

    const token = authorization.replace(/^Bearer\s/, '')

    const verified = await verify(token)

    if (typeof verified !== 'string') throw new Error('Invalid token')

    req.user = verified

    next()
  } catch (error: any) {
    return res.status(400).send(error.message)
  }
}

export default requireToken
