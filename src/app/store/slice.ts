import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

const initialState = {
  device: '',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateDevice(state, { payload }: PayloadAction<string>) {
      state.device = payload
    },
  },
})

export const { updateDevice } = appSlice.actions
export const appReducer = appSlice.reducer

export const getDevice = (store: RootState) => store.app.device
