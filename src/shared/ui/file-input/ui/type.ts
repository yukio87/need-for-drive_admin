import { FieldValues, UseFormRegister } from 'react-hook-form'

export interface FileInputProps {
  register: UseFormRegister<FieldValues>
  keyName: string
}
