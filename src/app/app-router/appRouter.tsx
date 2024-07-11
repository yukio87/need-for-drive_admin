import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/app-layout'
import { CarListPage } from '@/pages/car-list-page'
import { CreateEditCarPage } from '@/pages/create-edit-car-page'
import { LoginPage } from '@/pages/login-page'
import { OrderListPage } from '@/pages/order-list-page'
import { RegistrationPage } from '@/pages/registration-page'
import { routesPaths } from '@/shared/consts/routesPaths'
import { ProtectedRoute } from '@/shared/ui/protected-route'

const { pathLogin, pathRegistration, pathCarCard, pathCarList } = routesPaths

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
          path: pathCarCard,
          element: <CreateEditCarPage />,
        },
        {
          path: `${pathCarCard}/:carId`,
          element: <CreateEditCarPage />,
        },
      ],
    },
  ])
}
