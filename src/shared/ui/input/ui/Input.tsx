import { InputProps } from '../types/types'
import styles from './Input.module.scss'

export function Input({
  children,
  id,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={styles['form-input']}>
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
