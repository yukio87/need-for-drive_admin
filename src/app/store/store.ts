import { configureStore } from '@reduxjs/toolkit'

import { notificationReducer } from '@/features/notifications'
import { carSettingsReducer } from '@/widgets/car-settings'
import { carsParamsReducer, carsSortReducer } from '@/widgets/cars'
import { createEditCarReducer } from '@/widgets/create-edit-car'
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
    carSettings: carSettingsReducer,
    createEditCar: createEditCarReducer,
  },
})
