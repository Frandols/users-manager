import { useFormikContext } from 'formik'
import { AnimatePresence, motion } from 'framer-motion'
import { object, string, ref } from 'yup'

import { Form, Control, Button } from '@/components'
import { useModal, useCreateUser } from '@/hooks'

import styles from './createUser.component.module.css'
import Add from '@/components/icons/add.icon.component'
import Cancel from '@/components/icons/cancel.icon.component.tsx'
import RightArrow from '@/components/icons/rightArrow.component'

const variants = {
  register: {
    hidden: {
      opacity: 0,
      scale: 1.025,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
}

type CreateUserProps = { onCreate: () => void }

type CreateUserForm = {
  name: string
  password: string
  passwordConfirmation: string
}

const CreateUser = ({ onCreate }: CreateUserProps) => {
  const { visible, open, close } = useModal()

  const { createUserHandler, loading } = useCreateUser(() => {
    onCreate()
    close()
  })

  return (
    <>
      <Button className={styles.headerButton} onClick={open}>
        <Add /> New
      </Button>
      <AnimatePresence mode="wait">
        {visible ? (
          <div className={styles.registerContainer}>
            <motion.section
              className={styles.register}
              variants={variants.register}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.25 }}
            >
              <motion.button
                className={styles.registerClose}
                onClick={close}
                whileHover={{ scale: 0.925 }}
              >
                <Cancel width={24} height={24} color="rgb(119 125 134)" />
              </motion.button>
              <h1 className={styles.registerTitle}>Create a new user</h1>
              <h2 className={styles.registerSubtitle}>
                Enter the following requirements
              </h2>
              <Form<CreateUserForm>
                className={styles.registerForm}
                initialValues={{
                  name: '',
                  password: '',
                  passwordConfirmation: '',
                }}
                validationSchema={object({
                  name: string()
                    .required('Name required')
                    .min(4, 'Name must have 4 characters minimum')
                    .max(16, 'Name must have 16 characters maximum'),
                  password: string()
                    .required('Password required')
                    .min(8, 'Password must have 8 characters minimum')
                    .max(16, 'Password must have 16 characters maximum'),
                  passwordConfirmation: string()
                    .oneOf([ref('password')], 'Passwords must match')
                    .required('Password confirmation required'),
                })}
                onSubmit={(values) => createUserHandler(values)}
              >
                <CreateUserFormControls loading={loading} />
              </Form>
            </motion.section>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

const CreateUserFormControls = ({ loading }: { loading: boolean }) => {
  const { isValid } = useFormikContext()

  return (
    <>
      <Control
        className={styles.registerFormControl}
        name="name"
        placeholder="Name..."
      />
      <Control
        className={styles.registerFormControl}
        name="password"
        placeholder="Password..."
        type="password"
      />
      <Control
        className={styles.registerFormControl}
        name="passwordConfirmation"
        placeholder="Confirm password..."
        type="password"
      />
      <Button
        className={styles.registerFormButton}
        type="submit"
        disabled={!isValid || loading}
        loading={loading}
      >
        Register <RightArrow />
      </Button>
    </>
  )
}

export default CreateUser
