import { Control, FieldErrors, UseFormRegister } from 'react-hook-form'

import { Car, CarCardInputs } from '@/types/type'

export interface InputGroupProps {
  car: Car
  register: UseFormRegister<CarCardInputs>
  control: Control<CarCardInputs, unknown>
  errors: FieldErrors<CarCardInputs>
}
