import { toast } from 'react-hot-toast'

import { deleteUser } from '@/services'

const useDeleteUser = () => {
  const deleteUserHandler = async (token: string) => {
    try {
      await deleteUser(token)

      toast.success('User successfully deleted')
    } catch {}
  }

  return { deleteUserHandler }
}

export default useDeleteUser
