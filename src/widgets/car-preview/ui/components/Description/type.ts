import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { CarCardInputs } from '@/types/type'

export interface DescriptionProps {
  register: UseFormRegister<CarCardInputs>
  errors: FieldErrors<CarCardInputs>
}
