import { createBrowserRouter, Navigate } from 'react-router-dom'

import { CarSettingsPage } from '@/pages/car-settings-page'
import { LoginPage } from '@/pages/login-page'
import { OrderListPage } from '@/pages/order-list-page'
import { RegistrationPage } from '@/pages/registration-page'
import { TablePage } from '@/pages/table-page'
import { routesPaths } from '@/shared/consts/routesPaths'

import { ProtectedRouteProps } from './types/types'

const {
  pathLogin,
  pathRegistration,
  pathCarSettings,
  pathTable,
  pathOrderList,
} = routesPaths

function ProtectedRoute({ isAllowed, children }: ProtectedRouteProps) {
  if (!isAllowed) return <Navigate to={pathLogin} />

  return children
}

export function appRouter(isLoggedIn: boolean) {
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
      path: pathCarSettings,
      element: (
        <ProtectedRoute isAllowed={isLoggedIn}>
          <CarSettingsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: pathTable,
      element: (
        <ProtectedRoute isAllowed={isLoggedIn}>
          <TablePage />
        </ProtectedRoute>
      ),
    },
    {
      path: pathOrderList,
      element: (
        <ProtectedRoute isAllowed={isLoggedIn}>
          <OrderListPage />
        </ProtectedRoute>
      ),
    },
  ])
}
