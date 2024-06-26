import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/app-layout'
import { CarListPage } from '@/pages/car-list-page'
import { CarSettingsPage } from '@/pages/car-settings-page'
import { LoginPage } from '@/pages/login-page'
import { OrderListPage } from '@/pages/order-list-page'
import { RegistrationPage } from '@/pages/registration-page'
import { routesPaths } from '@/shared/consts/routesPaths'
import { ProtectedRoute } from '@/shared/ui/protected-route'

const { pathLogin, pathRegistration, pathCarSettings, pathCarList } =
  routesPaths

export const appRouter = () => {
  return createBrowserRouter([
    {
      path: pathLogin,
      element: <LoginPage />,
    },
    {
      path: pathRegistration,
      element: <RegistrationPage />,
    },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),

      children: [
        {
          path: '/',
          element: <OrderListPage />,
        },
        {
          path: pathCarList,
          element: <CarListPage />,
        },
        {
          path: pathCarSettings,
          element: <CarSettingsPage />,
        },
      ],
    },
  ])
}
