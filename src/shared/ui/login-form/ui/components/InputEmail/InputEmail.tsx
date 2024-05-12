import { useContext } from 'react'

import { LoginFormContext } from '../../LoginForm'
import styles from './InputEmail.module.scss'
import { InputEmailProps } from './types/types'

export function InputEmail({ children }: InputEmailProps) {
  const { emailVal, handleEmail } = useContext(LoginFormContext)

  return (
    <div className={styles['form-input']}>
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
