import { FieldErrors, UseFormGetValues } from 'react-hook-form'

import { CarCardInputs } from '@/types/type'

export interface ProgressBarProps {
  getValues: UseFormGetValues<CarCardInputs>
  errors: FieldErrors<CarCardInputs>
}
