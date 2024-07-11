import { ReactNode } from 'react'
import {
  FieldErrors,
  UseFormClearErrors,
  UseFormRegister,
} from 'react-hook-form'

import { CarCardInputs } from '@/types/type'

export interface InputAddColorProps {
  children: ReactNode
  id: string
  isEditSession: boolean
  register: UseFormRegister<CarCardInputs>
  errors: FieldErrors<CarCardInputs>
  clearErrors: UseFormClearErrors<CarCardInputs>
}
