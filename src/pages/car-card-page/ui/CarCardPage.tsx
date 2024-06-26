import { useQuery } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { Loader } from '@/shared/ui/loader'

import { carsParams } from './consts/carsParams'

export const CarCardPage = () => {
  const { isLoading, data: firstCarId } = useQuery({
    queryKey: ['cars'],
    queryFn: () => AuthService.getCars(carsParams),
    throwOnError: true,
    select: (queryData) => String(queryData.data.data[0].id),
  })

  if (isLoading) return <Loader size="45px" animation="grow" />

  return <Navigate to={firstCarId} />
}
