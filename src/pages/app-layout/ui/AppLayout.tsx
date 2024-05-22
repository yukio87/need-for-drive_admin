import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useDispatch } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import { $api } from '@/shared/api/api'
import AuthService from '@/shared/api/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { getCookieValue, saveCookieValue } from '@/shared/lib/cookie'
import { ErrorFallback } from '@/shared/ui/error-fallback'
import { Loader } from '@/shared/ui/loader'
import { Role } from '@/types/type'
import { setUserRoles } from '@/widgets/login'

export const AppLayout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)

  const { mutate } = useMutation({
    mutationFn: () => AuthService.refreshToken(),
    onSuccess: (data) => {
      const roles: Role[] =
        data.data.user_id === '1' ? ['admin', 'user'] : ['user'] // ? ролей нет, поэтому, если user_id === '1', то user - admin
      const isAuthAdminByUserId = roles.some((el) => el === 'admin')

      saveCookieValue('accessToken', data.data.access_token)

      $api.defaults.headers.common.Authorization = `Bearer ${data.data.access_token}`

      dispatch(setUserRoles(roles))
      navigate(isAuthAdminByUserId ? pathCarSettings : pathHome)
      setIsLoading(false)
    },
    onError: () => {
      setIsLoading(false)
    },
  })

  useEffect(() => {
    if (getCookieValue('accessToken')) mutate()
    else setIsLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { pathCarSettings, pathHome } = routesPaths

  if (isLoading)
    return (
      <div style={{ height: '100vh' }}>
        <Loader size="60px" animation="grow" />
      </div>
    )

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate(-1)}
    >
      <Outlet />
    </ErrorBoundary>
  )
}
