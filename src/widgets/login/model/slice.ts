import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

const initialState = {
  isAuth: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth(state, { payload }: PayloadAction<boolean>) {
      state.isAuth = payload
    },
  },
})

export const { setIsAuth } = authSlice.actions
export const authReducer = authSlice.reducer

export const getIsAuth = (store: RootState) => store.auth.isAuth
