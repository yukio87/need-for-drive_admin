import { FC } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AppLayout } from '@/pages/app-layout'
import { CarSettingsPage } from '@/pages/car-settings-page'
import { HomePage } from '@/pages/home-page'
import { LoginPage } from '@/pages/login-page'
import { OrderListPage } from '@/pages/order-list-page'
import { RegistrationPage } from '@/pages/registration-page'
import { TablePage } from '@/pages/table-page'
import { routesPaths } from '@/shared/consts/routesPaths'

import { ProtectedRouteProps } from './type'

const {
  pathLogin,
  pathRegistration,
  pathCarSettings,
  pathHome,
  pathTable,
  pathOrderList,
} = routesPaths

const ProtectedRoute: FC<ProtectedRouteProps> = ({ isAllowed, children }) => {
  if (!isAllowed) return <Navigate to={pathLogin} />

  return children
}

export const appRouter = (isAuthAdmin: boolean) => {
  return createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,

      children: [
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
            <ProtectedRoute isAllowed={isAuthAdmin}>
              <CarSettingsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: pathTable,
          element: (
            <ProtectedRoute isAllowed={isAuthAdmin}>
              <TablePage />
            </ProtectedRoute>
          ),
        },
        {
          path: pathOrderList,
          element: (
            <ProtectedRoute isAllowed={isAuthAdmin}>
              <OrderListPage />
            </ProtectedRoute>
          ),
        },
        {
          path: pathHome,
          element: <HomePage />,
        },
      ],
    },
  ])
}
