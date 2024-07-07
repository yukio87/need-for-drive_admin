import { UseMutateFunction } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { MutateCarResponse } from '@/types/type'

export interface ButtonGroupProps {
  isEditSession: boolean
  deleteCar: UseMutateFunction<
    AxiosResponse<MutateCarResponse, AxiosError>,
    Error,
    void,
    unknown
  >
}
