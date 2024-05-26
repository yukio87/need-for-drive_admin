import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { $api } from '@/shared/api/api'
import AuthService from '@/shared/api/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { saveCookieValue } from '@/shared/lib/cookie'
import { getIsValidEmail, getIsValidPassword } from '@/shared/lib/validate'
import { Loader } from '@/shared/ui/loader'
import { LoginForm } from '@/shared/ui/login-form'
import { StyledLoader } from '@/shared/ui/styled-loader'

import { setIsAuth } from '../model/slice'
import styles from './Login.module.scss'
import { ErrorResponse, LoginData } from './type'

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
  const [basicToken, setBasicToken] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isPending, mutate } = useMutation({
    mutationFn: () =>
      AuthService.login(
        emailVal.toLowerCase().trim(),
        passwordVal,
        emailVal === 'intern',
        setBasicToken,
      ),
    onSuccess: (data: LoginData) => {
      saveCookieValue('basicToken', basicToken)
      saveCookieValue('accessToken', data.data.access_token)
      saveCookieValue('refreshToken', data.data.refresh_token)

      $api.defaults.headers.common.Authorization = `Bearer ${data.data.access_token}`

      dispatch(setIsAuth(true))
      navigate('/')
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      if (err.response.data.status === 401)
        toast.error('Пользователь не найден...')
      else toast.error('Повторите попытку позже...')
    },
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

  if (isPending)
    return (
      <StyledLoader>
        <Loader size="60px" animation="grow" />
      </StyledLoader>
    )

  return (
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
              <LoginForm.NavLinkTo to="/">Запросить доступ</LoginForm.NavLinkTo>
              <LoginForm.NavLinkTo to={pathRegistration}>
                Регистрация
              </LoginForm.NavLinkTo>
              <LoginForm.Button>Войти</LoginForm.Button>
            </div>
          </form>
        </div>
      </div>
    </LoginForm>
  )
}
