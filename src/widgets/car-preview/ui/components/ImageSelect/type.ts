import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { Car, CarCardInputs } from '@/types/type'

export interface ImageSelectProps {
  car: Car | undefined
  isEditSession: boolean
  register: UseFormRegister<CarCardInputs>
  errors: FieldErrors<CarCardInputs>
}
