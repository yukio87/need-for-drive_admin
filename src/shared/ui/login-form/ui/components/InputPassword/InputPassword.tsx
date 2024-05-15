import { FC, useContext, useState } from 'react'

import { Icon } from '@/shared/ui/icon'

import { LoginFormContext } from '../../LoginForm'
import { iconBasicStyles } from './consts/styles'
import styles from './InputPassword.module.scss'
import { InputPasswordProps } from './type'

const { 'form-input': formInput, eye } = styles

export const InputPassword: FC<InputPasswordProps> = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false)
  const { passwordVal, handlePassword } = useContext(LoginFormContext)

  const toggleShowPassword = () => {
    setShowPassword((v) => !v)
  }

  return (
    <div className={formInput}>
      <div className={eye} onClick={toggleShowPassword} aria-hidden={true}>
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
