import { User } from '../models'
import { UserInput } from '../schemas'

const createUser = (user: UserInput) => User.create(user)

const getUsers = () => User.find().select({ password: false, __v: false })

const getUser = (name: string) => User.findOne({ name })

const updateUser = (_id: string, user: Partial<UserInput>) =>
  User.findOneAndUpdate({ _id }, user)

const deleteUser = (_id: string) => User.deleteOne({ _id })

export { createUser, getUsers, getUser, updateUser, deleteUser }
