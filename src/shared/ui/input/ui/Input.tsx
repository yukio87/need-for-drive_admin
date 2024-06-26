import { FC } from 'react'

import styles from './Input.module.scss'
import { InputProps } from './type'

const { 'form-input': formInput, label, input, 'input-err': inputErr } = styles

export const Input: FC<InputProps> = ({
  width = '100%',
  children,
  id,
  placeholder,
  value,
  onChange,
  defaultValue,
  register,
  registerOptions,
  isError = false,
}) => {
  return (
    <div className={formInput} style={{ width }}>
      <label className={label} htmlFor={id}>
        {children}
      </label>
      <input
        className={`${isError ? inputErr : input}`}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...(register && id ? register(id, registerOptions) : {})}
      />
    </div>
  )
}
