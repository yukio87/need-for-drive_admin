import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { setDefaultInputsVal } from '@/pages/car-card-id-page'
import AuthService from '@/shared/api/AuthService/AuthService'
import { Loader } from '@/shared/ui/loader'

import { carsParams } from './consts/carsParams'

export const CarCardPage = () => {
  const dispatch = useDispatch()

  const { isLoading, data: firstCar } = useQuery({
    queryKey: ['cars', carsParams],
    queryFn: () => AuthService.getCars(carsParams),
    throwOnError: true,
    select: (queryData) => queryData.data.data[0],
  })

  useEffect(() => {
    if (!isLoading)
      dispatch(
        setDefaultInputsVal({
          description: firstCar.description,
          name: firstCar.name,
          categoryId: firstCar.categoryId,
          thumbnail: firstCar.thumbnail,
        }),
      )
  }, [dispatch, firstCar, isLoading])

  if (isLoading) return <Loader size="45px" animation="grow" />

  return <Navigate to={String(firstCar.id)} />
}
