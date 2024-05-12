import { RouterProvider } from 'react-router-dom'

import { appRouter } from './app-router/appRouter'

const isLoggedIn = true // временно

function App() {
  return <RouterProvider router={appRouter(isLoggedIn)} />
}

export default App
