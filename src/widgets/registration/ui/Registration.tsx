import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { routesPaths } from '@/shared/consts/routesPaths'
import {
  getIsValidConfPassword,
  getIsValidEmail,
  getIsValidPassword,
} from '@/shared/lib/validate'
import { LoginForm } from '@/shared/ui/login-form'

import styles from './Registration.module.scss'

export function Registration() {
  const [emailVal, setEmailVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const [confPasswordVal, setConfPasswordVal] = useState('')
  const navigate = useNavigate()

  const { pathLogin } = routesPaths

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailVal(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value)
  }

  const handleConfPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfPasswordVal(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValidEmail = getIsValidEmail(emailVal)
    const isValidPassword = getIsValidPassword(passwordVal)
    const IsValidConfPassword = getIsValidConfPassword(
      passwordVal,
      confPasswordVal,
    )

    if (isValidEmail && isValidPassword && IsValidConfPassword) {
      // console.log(`Почта ${emailVal.toLowerCase().trim()}`)
      // console.log(`Пароль ${passwordVal}`)
      // Написать функциональную часть из F-8

      navigate(pathLogin)
      toast.success('Регистрация успешно пройдена')
    }
  }

  return (
    <LoginForm
      data={{
        emailVal,
        passwordVal,
        confPasswordVal,
        handleEmail,
        handlePassword,
        handleConfPassword,
      }}
    >
      <div className={styles['login-form-container']}>
        <LoginForm.Logo />
        <div className={styles.content}>
          <div className={styles.title}>
            <LoginForm.Title>Регистрация</LoginForm.Title>
          </div>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <LoginForm.InputEmail>Почта</LoginForm.InputEmail>
            <LoginForm.InputPassword>Пароль</LoginForm.InputPassword>
            <LoginForm.InputConfPassword>
              Подтвердите пароль
            </LoginForm.InputConfPassword>
            <div className={styles.buttons}>
              <LoginForm.Button>Регистрация</LoginForm.Button>
            </div>
          </form>
        </div>
      </div>
    </LoginForm>
  )
}
