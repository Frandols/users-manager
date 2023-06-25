import styles from './loader.component.module.css'

type LoaderProps = { color: string }

const Loader = ({ color }: LoaderProps) => {
  return (
    <div
      className={styles.loader}
      id="loader"
      style={{ borderColor: color, borderTopColor: 'transparent' }}
    ></div>
  )
}

export default Loader
