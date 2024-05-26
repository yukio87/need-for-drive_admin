import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { $api } from '@/shared/api/api'
import AuthService from '@/shared/api/AuthService'
import { getCookieValue, saveCookieValue } from '@/shared/lib/cookie'
import { Loader } from '@/shared/ui/loader'
import { setIsAuth } from '@/widgets/login'

import { appRouter } from './app-router/appRouter'

export const App = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  const { mutate } = useMutation({
    mutationFn: () => AuthService.refreshToken(),
    onSuccess: (data) => {
      saveCookieValue('accessToken', data.data.access_token)

      $api.defaults.headers.common.Authorization = `Bearer ${data.data.access_token}`

      dispatch(setIsAuth(true))
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

  if (isLoading)
    return (
      <div style={{ height: '100vh' }}>
        <Loader size="60px" animation="grow" />
      </div>
    )

  return <RouterProvider router={appRouter()} />
}
