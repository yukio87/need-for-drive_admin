import { configureStore } from '@reduxjs/toolkit'

import { notificationReducer } from '@/features/notifications'
import { carsParamsReducer, carsSortReducer } from '@/widgets/cars'
import { ordersFiltersReducer, ordersParamsReducer } from '@/widgets/orders'

import { appReducer } from './slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    notifications: notificationReducer,
    ordersFilters: ordersFiltersReducer,
    ordersParams: ordersParamsReducer,
    carsSort: carsSortReducer,
    carsParams: carsParamsReducer,
  },
})
