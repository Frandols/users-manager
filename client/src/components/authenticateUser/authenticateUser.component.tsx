import { useFormikContext } from 'formik'
import { motion } from 'framer-motion'
import { object, string } from 'yup'

import { Form, Control, Button } from '@/components'
import { useAuthenticateUser } from '@/hooks'

import styles from './authenticateUser.component.module.css'

const variants = {
  authenticateUser: {
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -8,
    },
  },
}

type AuthenticateUserProps = {
  name: string
  onAuthenticate: (token: string) => void
}

type AuthenticateUserForm = { password: string }

const authenticateUser = ({ name, onAuthenticate }: AuthenticateUserProps) => {
  const { loading, getTokenHandler } = useAuthenticateUser(onAuthenticate)

  return (
    <motion.div
      className={styles.authenticateUser}
      variants={variants.authenticateUser}
      initial="visible"
      exit="exit"
      transition={{ duration: 0.25 }}
    >
      <h1 className={styles.authenticateUserTitle}>Insert password</h1>
      <p className={styles.authenticateUserSubtitle}>
        For executing this action you need user&apos;s corresponding password
      </p>
      <Form<AuthenticateUserForm>
        className={styles.authenticateUserForm}
        initialValues={{
          password: '',
        }}
        validationSchema={object({
          password: string()
            .required('Password required')
            .min(8, 'Password must have 8 characters minimum')
            .max(16, 'Password must have 16 characters maximum'),
        })}
        onSubmit={({ password }) => getTokenHandler({ name, password })}
      >
        <AuthenticateUserFormControls loading={loading} />
      </Form>
    </motion.div>
  )
}

const AuthenticateUserFormControls = ({ loading }: { loading: boolean }) => {
  const { isValid } = useFormikContext()

  return (
    <>
      <Control
        className={styles.authenticateUserFormControl}
        name="password"
        placeholder="Password..."
        type="password"
      />
      <Button type="submit" disabled={!isValid || loading} loading={loading}>
        Continue
      </Button>
    </>
  )
}

export default authenticateUser
