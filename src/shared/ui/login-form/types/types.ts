import { ChangeEvent, ReactNode } from 'react'

export interface Data {
  emailVal: string
  passwordVal: string
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void
  handlePassword: (e: ChangeEvent<HTMLInputElement>) => void
  confPasswordVal?: string
  handleConfPassword?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface LoginFormProps {
  children: ReactNode
  data: Data
}

export interface LoginFormContextType {
  emailVal: string
  passwordVal: string
  confPasswordVal: string
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void
  handlePassword: (e: ChangeEvent<HTMLInputElement>) => void
  handleConfPassword: (e: ChangeEvent<HTMLInputElement>) => void
}
