import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface FileInputProps {
  register?: UseFormRegister<FieldValues>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  selectedFile?: File | undefined
  isError?: boolean
  accept?: string
}
