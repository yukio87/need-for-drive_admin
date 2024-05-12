import { ReactNode } from 'react'

export interface InputProps {
  children: ReactNode
  id: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
