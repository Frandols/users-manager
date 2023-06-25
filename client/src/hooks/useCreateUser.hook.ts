import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { createUser } from '@/services'

type CreateUserValues = {
  name: string
  password: string
}

const useCreateUser = (onClose: () => void) => {
  const [loading, setLoading] = useState<boolean>(false)

  const createUserHandler = async (values: CreateUserValues) => {
    try {
      setLoading(true)

      await createUser(values)

      toast.success(`User ${values.name} created successfully`)

      onClose()
    } catch {}

    setLoading(false)
  }

  return {
    loading,
    createUserHandler,
  }
}

export default useCreateUser
