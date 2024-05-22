import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Role, RootState } from '@/types/type'

import { AuthState } from './type'

const initialState: AuthState = {
  userRoles: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserRoles(state, { payload }: PayloadAction<Role[]>) {
      state.userRoles = payload
    },
  },
})

export const { setUserRoles } = authSlice.actions
export const authReducer = authSlice.reducer

export const getIsAuthAdmin = (store: RootState) =>
  store.auth.userRoles.some((el) => el === 'admin')
