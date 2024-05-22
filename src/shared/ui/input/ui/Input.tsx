import { FC } from 'react'

import styles from './Input.module.scss'
import { InputProps } from './type'

const { 'form-input': formInput } = styles

export const Input: FC<InputProps> = ({
  children,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={formInput}>
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
