import { Request, Response } from 'express'

import { UserInput } from '../schemas'
import { createUser, getUsers, updateUser, deleteUser } from '../services'

const createUserHandler = async (req: Request, res: Response) => {
  try {
    const payload = req.body as UserInput

    await createUser(payload)

    return res.sendStatus(201)
  } catch (error: any) {
    return res.status(400).send(error.message)
  }
}

const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getUsers()

    return res.status(200).send(users)
  } catch (error: any) {
    return res.status(400).send(error.message)
  }
}

const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const { user } = req as Request & { user: string }

    const payload = req.body as Partial<UserInput>

    await updateUser(user, payload)

    return res.sendStatus(200)
  } catch (error: any) {
    return res.status(400).send(error.message)
  }
}

const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    const { user } = req as Request & { user: string }

    await deleteUser(user)

    return res.sendStatus(200)
  } catch (error: any) {
    return res.status(400).send(error.message)
  }
}

export {
  createUserHandler,
  getUsersHandler,
  updateUserHandler,
  deleteUserHandler,
}
