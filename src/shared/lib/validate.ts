import toast from 'react-hot-toast'
import validator from 'validator'

export const getIsValidEmail = (email: string) => {
  if (!validator.isEmail(email)) {
    toast.error('Некорректно заполнено поле "Почта"')
    return false
  }
  if (email.length >= 150) {
    toast.error('Максимальное кол-во символов в поле "Почта" равно 150')
    return false
  }
  return true
}

export const getIsValidPassword = (password: string) => {
  if (/^\s+$/.test(password)) {
    toast.error('Поле "Пароль" не может состоять только из пробелов')
    return false
  }
  if (password.trim() === '') {
    toast.error('Заполните поле "Пароль"')
    return false
  }
  if (password.length >= 150) {
    toast.error('Максимальное кол-во символов в поле "Пароль" равно 150')
    return false
  }
  return true
}

export const getIsValidConfPassword = (
  password: string,
  confPassword: string,
) => {
  if (password !== confPassword) {
    toast.error('Пароли не совподают')
    return false
  }
  return true
}
