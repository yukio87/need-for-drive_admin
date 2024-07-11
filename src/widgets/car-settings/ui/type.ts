import { UseMutateFunction } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'

import { Car, MutateCarResponse } from '@/types/type'

export interface CarSettingsProps {
  car: Car | undefined
  deleteCar: UseMutateFunction<
    AxiosResponse<MutateCarResponse, AxiosError>,
    Error,
    void,
    unknown
  >
  isEditSession: boolean
}
