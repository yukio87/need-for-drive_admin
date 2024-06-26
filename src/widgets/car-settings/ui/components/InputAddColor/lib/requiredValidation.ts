type ValidationFunction = (value: string) => string | null

export const requiredValidation: ValidationFunction = (value) => {
  if (value.length > 30) return 'Максимальное кол-во символов: 30'

  return null
}
