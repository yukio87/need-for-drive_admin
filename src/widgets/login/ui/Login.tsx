import { useState } from 'react'

import { routesPaths } from '@/shared/consts/routesPaths'
import { getIsValidEmail, getIsValidPassword } from '@/shared/lib/validate'
import { LoginForm } from '@/shared/ui/login-form'

import styles from './Login.module.scss'

export function Login() {
  const [emailVal, setEmailVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')

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

    if (isValidEmail && isValidPassword) {
      // console.log(`Почта ${emailVal.toLowerCase().trim()}`)
      // console.log(`Пароль ${passwordVal}`)
      // Написать функциональную часть из F-8
    }
  }

  return (
    <LoginForm
      data={{
        emailVal,
        passwordVal,
        handleEmail,
        handlePassword,
      }}
    >
      <div className={styles['login-form-container']}>
        <LoginForm.Logo />
        <div className={styles.content}>
          <div className={styles.title}>
            <LoginForm.Title>Вход</LoginForm.Title>
          </div>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <LoginForm.InputEmail>Почта</LoginForm.InputEmail>
            <LoginForm.InputPassword>Пароль</LoginForm.InputPassword>
            <div className={styles.buttons}>
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
