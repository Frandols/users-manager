import { InputHTMLAttributes } from 'react'

import styles from './input.component.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`${className || ''} ${styles.input}`}
      {...props}
      autoComplete="off"
    />
  )
}

export default Input
