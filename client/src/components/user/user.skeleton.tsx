import Skeleton from 'react-loading-skeleton'

import styles from './user.component.module.css'

const UserSkeleton = () => {
  return (
    <div className={styles.userSkeleton}>
      <Skeleton width={128} />
      <Skeleton width={96} />
    </div>
  )
}

export default UserSkeleton
