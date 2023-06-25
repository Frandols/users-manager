import { motion } from 'framer-motion'

import { User, UserSkeleton } from '@/components'
import { UserEntity } from '@/entities'

import styles from './users.component.module.css'

type UsersProps = {
  loading: boolean
  users: UserEntity[]
  getUsersHandler: () => Promise<void>
}

const Users = ({ loading, users, getUsersHandler }: UsersProps) => {
  return (
    <div className={styles.users}>
      <h1 className={styles.usersTitle}>All users</h1>
      <motion.ul
        className={styles.usersList}
        key={loading ? 'loading' : 'users'}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.2, staggerChildren: 0.07 }}
      >
        {!loading
          ? users.map((user) => (
              <User
                key={user._id}
                {...user}
                getUsersHandler={getUsersHandler}
              />
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element) => (
              <UserSkeleton key={element} />
            ))}
      </motion.ul>
    </div>
  )
}

export default Users
