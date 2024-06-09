import { configureStore } from '@reduxjs/toolkit'

import { notificationReducer } from '@/features/notifications'

export const store = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
})
