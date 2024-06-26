import { ReactNode } from 'react'
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form'

export interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  children?: ReactNode
  id?: string
  placeholder?: string
  width?: string
  defaultValue?: string
  register?: UseFormRegister<FieldValues>
  registerOptions?: RegisterOptions<FieldValues>
  isError?: boolean
}
