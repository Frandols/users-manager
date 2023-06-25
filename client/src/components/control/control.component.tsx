import { InputHTMLAttributes } from 'react'
import { useField, FieldHookConfig } from 'formik'

import { Input } from '@/components'

import styles from './control.component.module.css'

type ControlProps<T> = FieldHookConfig<T> &
  InputHTMLAttributes<HTMLInputElement>

const Control = <T,>({ className, ...props }: ControlProps<T>) => {
  const [field, meta] = useField(props)

  return (
    <div className={`${className} ${styles.control}`}>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className={styles.error}>{meta.error}</p>
      ) : null}
    </div>
  )
}

export default Control
