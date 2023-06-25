import { useState, useEffect } from 'react'

import { UserEntity } from '@/entities'
import { getUsers } from '@/services'

const useUsers = () => {
  const [users, setUsers] = useState<UserEntity[]>([])

  const [loading, setLoading] = useState<boolean>(true)

  const getUsersHandler = async () => {
    try {
      !loading && setLoading(true)

      const users = await getUsers()

      setUsers(users)
    } catch {}

    setLoading(false)
  }

  useEffect(() => {
    getUsersHandler()
  }, [])

  return { loading, users, getUsersHandler }
}

export default useUsers
