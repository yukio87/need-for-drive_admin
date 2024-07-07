import { ReactNode } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  children?: ReactNode
  id?: string
  placeholder?: string
  defaultValue?: string
  register?: UseFormRegister<FieldValues>
  isError?: boolean
  maxLength?: number
  type?: 'text' | 'number'
}
