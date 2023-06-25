import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { editUser } from '@/services'

type UserData = {
  name: string
  password: string
  passwordConfirmation: string
}

const useEditUser = (onEdit: () => void) => {
  const [token, setToken] = useState<string | null>(null)

  const [loading, setLoading] = useState<boolean>(false)

  const editUserHandler = async (data: UserData) => {
    try {
      setLoading(true)

      if (!token) return toast.error('Token error')

      const edited = { name: data.name, password: data.password }

      Object.keys(edited).forEach(
        (key) =>
          edited[key as keyof typeof edited] === '' &&
          delete edited[key as keyof typeof edited]
      )

      await editUser(edited, token)

      toast.success('User successfully edited')

      onEdit()
    } catch {}

    setLoading(false)
  }

  return {
    loading,
    token,
    setToken,
    editUserHandler,
  }
}

export default useEditUser
