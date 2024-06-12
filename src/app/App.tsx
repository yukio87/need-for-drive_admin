import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { deviceDetection } from '@/shared/lib/device'

import { appRouter } from './app-router/appRouter'
import { updateDevice } from './store/slice'

export const App = () => {
  const dispatch = useDispatch()

  const dispatchDevice = useCallback(() => {
    dispatch(updateDevice(deviceDetection()))
  }, [dispatch])

  useEffect(() => {
    window.addEventListener('resize', dispatchDevice)
    dispatchDevice()
    return () => window.removeEventListener('resize', dispatchDevice)
  }, [dispatchDevice])

  return <RouterProvider router={appRouter()} />
}
