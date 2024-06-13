import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { getParams } from '@/widgets/orders'

import { ModalLoader } from '../../modal-loader'
import { ProtectedRouteProps } from './type'

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const params = useSelector(getParams)

  const { isLoading, isError } = useQuery({
    queryKey: ['orders', params],
    queryFn: () => AuthService.getOrders(params),
  })

  const { pathLogin } = routesPaths

  if (isLoading) return <ModalLoader />
  if (!isError) return children

  return <Navigate to={pathLogin} />
}
