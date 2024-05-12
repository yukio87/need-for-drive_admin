import { useContext, useState } from 'react'

import { Icon } from '@/shared/ui/icon'

import { LoginFormContext } from '../../LoginForm'
import { iconBasicStyles } from './consts/styles'
import styles from './InputPassword.module.scss'
import { InputPasswordProps } from './types/types'

export function InputPassword({ children }: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false)
  const { passwordVal, handlePassword } = useContext(LoginFormContext)

  const toggleShowPassword = () => {
    setShowPassword((v) => !v)
  }

  return (
    <div className={styles['form-input']}>
      <div
        className={styles.eye}
        onClick={toggleShowPassword}
        aria-hidden={true}
      >
        <Icon
          name={showPassword ? `IconEyeSlash` : 'IconEye'}
          styles={iconBasicStyles}
        />
      </div>
      <label htmlFor="password">{children}</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
        placeholder="Подтвердите почту"
        defaultValue={passwordVal}
        onChange={handlePassword}
      />
    </div>
  )
}
