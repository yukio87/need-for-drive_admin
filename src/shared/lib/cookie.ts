import Cookies from 'js-cookie'

export const saveCookieValue = (fieldName: string, value: string) => {
  Cookies.set(fieldName, value)
}

export const getCookieValue = (fieldName: string): string | undefined => {
  return Cookies.get(fieldName)
}

export const removeCookieValue = (fieldName: string) => {
  Cookies.remove(fieldName)
}
