import { ReactNode } from 'react'

export interface CheckboxProps {
  label: ReactNode
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  name?: string
  value?: string
  disabled?: boolean
}
