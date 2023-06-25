import config from 'config'

import axios from 'axios'

import { UserEntity } from '@/entities'

const endpoint = config.API_URL + '/users'

type CreateUserData = {
  name: string
  password: string
}

const createUser = (data: CreateUserData) => axios.post(endpoint, data)

const getUsers = async () => {
  const response = await axios.get<UserEntity[]>(endpoint)

  return response.data
}

type EditUserData = {
  name?: string
  password?: string
}

const editUser = (data: EditUserData, token: string) =>
  axios.patch(endpoint, data, { headers: { Authorization: `Bearer ${token}` } })

const deleteUser = (token: string) =>
  axios.delete(endpoint, { headers: { Authorization: `Bearer ${token}` } })

export { createUser, getUsers, editUser, deleteUser }
