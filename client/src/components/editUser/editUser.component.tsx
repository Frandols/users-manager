import { useFormikContext } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'
import { object, string, ref } from 'yup'

import { Button, Modal, AuthenticateUser, Form, Control } from '@/components'
import { useModal, useEditUser } from '@/hooks'

import styles from './editUser.component.module.css'

const variants = {
  editUser: {
    hidden: {
      opacity: 0,
      x: 8,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25 },
    },
  },
}

type EditUserProps = {
  name: string
  onEdit: () => void
}

type EditUserForm = {
  name: string
  password: string
  passwordConfirmation: string
}

const EditUser = ({ name, onEdit }: EditUserProps) => {
  const { visible, open, close } = useModal()

  const { loading, token, setToken, editUserHandler } = useEditUser(() => {
    setTimeout(onEdit, 250)
    close()
  })

  return (
    <>
      <Button onClick={open} variant="text">
        Edit
      </Button>
      <Modal
        visible={visible}
        close={() => {
          close()

          setToken(null)
        }}
      >
        <AnimatePresence mode="wait">
          {!token ? (
            <AuthenticateUser
              name={name}
              onAuthenticate={setToken}
              key="authenticate"
            />
          ) : (
            <motion.main
              className={styles.editUser}
              key="edit"
              variants={variants.editUser}
              initial="hidden"
              animate="visible"
            >
              <h1 className={styles.editUserTitle}>Edit {name}&apos;s data</h1>
              <Form<EditUserForm>
                className={styles.editUserForm}
                initialValues={{
                  name: name,
                  password: '',
                  passwordConfirmation: '',
                }}
                validationSchema={object({
                  name: string()
                    .min(4, 'Name must have 4 characters minimum')
                    .max(16, 'Name must have 16 characters maximum'),
                  password: string()
                    .min(8, 'Password must have 8 characters minimum')
                    .max(16, 'Password must have 16 characters maximum'),
                  passwordConfirmation: string().when('password', {
                    is: (password: string) => password,
                    then: (type) =>
                      type
                        .required('Password confirmation required')
                        .oneOf([ref('password')], 'Passwords must match'),
                  }),
                })}
                onSubmit={(values) => editUserHandler(values)}
              >
                <EditUserFormControls loading={loading} />
              </Form>
            </motion.main>
          )}
        </AnimatePresence>
      </Modal>
    </>
  )
}

const EditUserFormControls = ({ loading }: { loading: boolean }) => {
  const { isValid } = useFormikContext()

  return (
    <>
      <Control name="name" placeholder="New name..." />
      <Control name="password" placeholder="New password..." type="password" />
      <Control
        name="passwordConfirmation"
        placeholder="Confirm new password..."
        type="password"
      />
      <Button type="submit" disabled={!isValid || loading} loading={loading}>
        Continue
      </Button>
    </>
  )
}

export default EditUser
