import { ReactNode } from 'react'

export interface InputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  size?: 'small' | 'big'
  hasLabel?: boolean
  children?: ReactNode
  id?: string
  placeholder?: string
}
