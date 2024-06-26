import { useEffect, useState } from 'react'

type ValidationFunction = (value: string) => string | null

export const useInputValidation = (
  initialValue: string,
  validationFunction: ValidationFunction,
) => {
  const [value, setValue] = useState<string>(initialValue)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setError(validationFunction(value))
  }, [value, validationFunction])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return { value, error, handleChange, setValue }
}
