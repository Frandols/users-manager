import { motion } from 'framer-motion'

import { EditUser, DeleteUser } from '@/components'
import { UserEntity } from '@/entities'
import { getFormattedDate } from '@/utilities'

import styles from './user.component.module.css'

const variants = {
  user: {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
}

const User = ({
  name,
  updatedAt,
  getUsersHandler,
}: UserEntity & { getUsersHandler: () => Promise<void> }) => {
  return (
    <motion.li className={styles.user} variants={variants.user}>
      <div className={styles.userInfo}>
        <h1 className={styles.userName}>{name}</h1>
        <p className={styles.userCreationDate}>{getFormattedDate(updatedAt)}</p>
      </div>
      <div className={styles.userActions}>
        <EditUser name={name} onEdit={getUsersHandler} />
        <DeleteUser name={name} onDelete={getUsersHandler} />
      </div>
    </motion.li>
  )
}

export default User
