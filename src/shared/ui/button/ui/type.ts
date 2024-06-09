import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  variations?: 'primary' | 'secondary' | 'danger'
}
