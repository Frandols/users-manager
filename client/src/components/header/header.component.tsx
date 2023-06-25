import { CreateUser } from '@/components'

import styles from './header.component.module.css'

type HeaderProps = { getUsersHandler: () => void }

const Header = ({ getUsersHandler }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Users-manager</h1>
      <CreateUser onCreate={getUsersHandler} />
    </header>
  )
}

export default Header
