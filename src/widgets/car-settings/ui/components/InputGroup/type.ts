import {
  Control,
  FieldErrors,
  UseFormClearErrors,
  UseFormRegister,
} from 'react-hook-form'

import { Car, CarCardInputs } from '@/types/type'

export interface InputGroupProps {
  car: Car | undefined
  isEditSession: boolean
  register: UseFormRegister<CarCardInputs>
  control: Control<CarCardInputs, unknown>
  errors: FieldErrors<CarCardInputs>
  clearErrors: UseFormClearErrors<CarCardInputs>
}
