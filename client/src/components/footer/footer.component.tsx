import styles from './footer.component.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created by{' '}
        <a
          className={styles.footerLink}
          href="https://portfolio-frandols.vercel.app/"
          target="_blank"
        >
          Francisco De Los Santos
        </a>
      </p>
    </footer>
  )
}

export default Footer
