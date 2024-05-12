import { createContext, useMemo } from 'react'

import { LoginFormContextType, LoginFormProps } from '../types/types'
import {
  Button,
  InputConfPassword,
  InputEmail,
  InputPassword,
  Logo,
  NavLinkTo,
  Title,
} from './components'

export const LoginFormContext = createContext<LoginFormContextType | undefined>(
  undefined,
)

export function LoginForm(props: LoginFormProps) {
  const { data, children } = props

  const {
    emailVal,
    passwordVal,
    confPasswordVal,
    handleEmail,
    handlePassword,
    handleConfPassword,
  } = data

  const contextValue = useMemo(
    () => ({
      emailVal,
      passwordVal,
      confPasswordVal,
      handleEmail,
      handlePassword,
      handleConfPassword,
    }),
    [
      emailVal,
      passwordVal,
      confPasswordVal,
      handleEmail,
      handlePassword,
      handleConfPassword,
    ],
  )

  return (
    <LoginFormContext.Provider value={contextValue}>
      {children}
    </LoginFormContext.Provider>
  )
}

LoginForm.Button = Button
LoginForm.InputConfPassword = InputConfPassword
LoginForm.InputEmail = InputEmail
LoginForm.InputPassword = InputPassword
LoginForm.Logo = Logo
LoginForm.NavLinkTo = NavLinkTo
LoginForm.Title = Title
