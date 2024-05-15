import { RouterProvider } from 'react-router-dom'

import { appRouter } from './app-router/appRouter'

const isLoggedIn = true // временно

export const App = () => {
  return <RouterProvider router={appRouter(isLoggedIn)} />
}
