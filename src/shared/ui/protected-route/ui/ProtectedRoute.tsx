import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { routesPaths } from '@/shared/consts/routesPaths'
import { getIsAuth } from '@/widgets/login'

import { ProtectedRouteProps } from './type'

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuth = useSelector(getIsAuth)

  const { pathLogin } = routesPaths

  if (!isAuth) return <Navigate to={pathLogin} />

  return children
}
