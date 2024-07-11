import { UseMutateFunction } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { UseFormReset } from 'react-hook-form'

import { CarCardInputs, MutateCarResponse } from '@/types/type'

export interface ButtonGroupProps {
  isEditSession: boolean
  deleteCar: UseMutateFunction<
    AxiosResponse<MutateCarResponse, AxiosError>,
    Error,
    void,
    unknown
  >
  reset: UseFormReset<CarCardInputs>
}
