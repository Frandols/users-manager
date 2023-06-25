import { Button, Modal, AuthenticateUser } from '@/components'
import { useModal, useDeleteUser } from '@/hooks'

type DeleteUserProps = {
  name: string
  onDelete: () => Promise<void>
}

const DeleteUser = ({ name, onDelete }: DeleteUserProps) => {
  const { visible, open, close } = useModal()

  const { deleteUserHandler } = useDeleteUser()

  return (
    <>
      <Button onClick={open}>Delete</Button>
      <Modal visible={visible} close={close}>
        <AuthenticateUser
          name={name}
          onAuthenticate={(token: string) =>
            deleteUserHandler(token).then(() => {
              close()

              setTimeout(onDelete, 250)
            })
          }
        />
      </Modal>
    </>
  )
}

export default DeleteUser
