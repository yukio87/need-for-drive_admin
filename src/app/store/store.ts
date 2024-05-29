import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@/widgets/login'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
