import { useQuery } from '@tanstack/react-query'
import { Navigate } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { Loader } from '@/shared/ui/loader'
import { StyledLoader } from '@/shared/ui/styled-loader'

export const OrderListPage = () => {
  // Временно для проверки
  const { isLoading, isError } = useQuery({
    queryKey: ['orders'],
    queryFn: () => AuthService.getOrders(),
  })

  const { pathLogin } = routesPaths

  if (isLoading)
    return (
      <StyledLoader>
        <Loader size="60px" animation="grow" />
      </StyledLoader>
    )

  if (isError) return <Navigate to={pathLogin} />

  return <div>OrderListPage</div>
}
