import { CreateUser } from '@/components'

import styles from './header.component.module.css'
import logo from '@/assets/logo-dark.svg'

type HeaderProps = { getUsersHandler: () => void }

const Header = ({ getUsersHandler }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <a className={styles.headerLink} href="/">
        <img
          src={logo}
          alt="Francisco De Los Santos Logo"
          width={40}
          height={40}
        />
        <h1 className={styles.headerTitle}>Users-manager</h1>
      </a>
      <CreateUser onCreate={getUsersHandler} />
    </header>
  )
}

export default Header
