import { FC, useContext } from 'react'

import { LoginFormContext } from '../../LoginForm'
import styles from './InputEmail.module.scss'
import { InputEmailProps } from './type'

const { 'form-input': formInput } = styles

export const InputEmail: FC<InputEmailProps> = ({ children }) => {
  const { emailVal, handleEmail } = useContext(LoginFormContext)

  return (
    <div className={formInput}>
      <label htmlFor="email">{children}</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Введите почту"
        defaultValue={emailVal}
        onChange={handleEmail}
      />
    </div>
  )
}
