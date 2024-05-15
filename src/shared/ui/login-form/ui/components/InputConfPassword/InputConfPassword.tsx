import { FC, useContext, useState } from 'react'

import { Icon } from '@/shared/ui/icon'

import { LoginFormContext } from '../../LoginForm'
import { iconBasicStyles } from './consts/styles'
import styles from './InputConfPassword.module.scss'
import { InputConfPasswordProps } from './type'

const { 'form-input': formInput, eye } = styles

export const InputConfPassword: FC<InputConfPasswordProps> = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false)
  const { confPasswordVal, handleConfPassword } = useContext(LoginFormContext)

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
      <label htmlFor="passwordConf">{children}</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="passwordConf"
        name="passwordConf"
        placeholder="Подтвердите почту"
        defaultValue={confPasswordVal}
        onChange={handleConfPassword}
      />
    </div>
  )
}
