import { useState } from 'react'

import { getToken } from '@/services'

type UserCredentials = {
  name: string
  password: string
}

const useAuthenticateUser = (onAuthenticate: (token: string) => void) => {
  const [loading, setLoading] = useState<boolean>(false)

  const getTokenHandler = async (credentials: UserCredentials) => {
    try {
      setLoading(true)

      const token = await getToken(credentials)

      await onAuthenticate(token)
    } catch {}

    setLoading(false)
  }

  return {
    loading,
    getTokenHandler,
  }
}

export default useAuthenticateUser
