import { configureStore } from '@reduxjs/toolkit'

import { notificationReducer } from '@/features/notifications'
import { filterReducer, paramsReducer } from '@/widgets/orders'

import { appReducer } from './slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    notifications: notificationReducer,
    filters: filterReducer,
    params: paramsReducer,
  },
})
