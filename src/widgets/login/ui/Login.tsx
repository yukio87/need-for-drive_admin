import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { getIsValidEmail, getIsValidPassword } from '@/shared/lib/validate'
import { LoginForm } from '@/shared/ui/login-form'
import { ModalLoader } from '@/shared/ui/modal-loader'

import styles from './Login.module.scss'

const {
  'login-form-container': loginFormContainer,
  content,
  title,
  form,
  buttons,
} = styles

export const Login = () => {
  const [emailVal, setEmailVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const navigate = useNavigate()

  const { isPending, mutate } = useMutation({
    mutationFn: () =>
      AuthService.login(
        emailVal.toLowerCase().trim(),
        passwordVal,
        emailVal === 'intern',
      ),
    onSuccess: () => navigate('/'),
    onSettled: () => {
      setEmailVal('')
      setPasswordVal('')
    },
  })

  const { pathRegistration } = routesPaths

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailVal(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValidEmail = getIsValidEmail(emailVal)
    const isValidPassword = getIsValidPassword(passwordVal)

    if (isValidEmail && isValidPassword) mutate()
  }

  return (
    <>
      {isPending && <ModalLoader />}
      <LoginForm
        data={{
          emailVal,
          passwordVal,
          handleEmail,
          handlePassword,
        }}
      >
        <div className={loginFormContainer}>
          <LoginForm.Logo />
          <div className={content}>
            <div className={title}>
              <LoginForm.Title>Вход</LoginForm.Title>
            </div>
            <form className={form} onSubmit={handleSubmit} noValidate>
              <LoginForm.InputEmail>Почта</LoginForm.InputEmail>
              <LoginForm.InputPassword>Пароль</LoginForm.InputPassword>
              <div className={buttons}>
                <LoginForm.NavLinkTo to="/">
                  Запросить доступ
                </LoginForm.NavLinkTo>
                <LoginForm.NavLinkTo to={pathRegistration}>
                  Регистрация
                </LoginForm.NavLinkTo>
                <LoginForm.Button>Войти</LoginForm.Button>
              </div>
            </form>
          </div>
        </div>
      </LoginForm>
    </>
  )
}
