import { useSelector } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { getIsAuthAdmin } from '@/widgets/login'

import { appRouter } from './app-router/appRouter'

export const App = () => {
  const isAuthAdmin = useSelector(getIsAuthAdmin)

  return <RouterProvider router={appRouter(isAuthAdmin)} />
}
