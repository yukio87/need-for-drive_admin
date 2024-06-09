import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { Navigate } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'

import { ModalLoader } from '../../modal-loader'
import { ProtectedRouteProps } from './type'

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoading, isError } = useQuery({
    queryKey: ['orders'],
    queryFn: () => AuthService.getOrders(),
    select: (response) => response.data.data,
  })

  const { pathLogin } = routesPaths

  if (isLoading) return <ModalLoader />
  if (!isError) return children

  return <Navigate to={pathLogin} />
}
