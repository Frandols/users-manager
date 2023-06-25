import { ButtonHTMLAttributes } from 'react'
import { MotionProps, motion } from 'framer-motion'

import { Loader } from '@/components'

import styles from './button.component.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
  variant?: 'text' | 'contained'
  loading?: boolean
} & MotionProps

const Button = ({
  disabled = false,
  variant = 'contained',
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      className={`${className || ''} ${styles.button} ${
        disabled && styles.buttonDisabled
      }`}
      style={{
        backgroundColor:
          variant === 'contained' ? 'var(--gray)' : 'transparent',
        color: variant === 'contained' ? '#fff' : 'var(--gray)',
      }}
      whileHover={{ scale: disabled ? 1 : 0.975 }}
      {...props}
    >
      {loading ? <Loader color="#fff" /> : children}
    </motion.button>
  )
}

export default Button
