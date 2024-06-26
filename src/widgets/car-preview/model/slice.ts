import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { InitialState, Payload } from './type'

const initialState: InitialState = {
  descriptionIsValid: true,
}

const CarPreviewSlice = createSlice({
  name: 'CarPreview',
  initialState,
  reducers: {
    setIsValid(state, { payload }: PayloadAction<Payload>) {
      const { pointName, value } = payload
      state[pointName] = value
    },
  },
})

export const { setIsValid } = CarPreviewSlice.actions
export const CarPreviewReducer = CarPreviewSlice.reducer

export const getCarPreviewIsValid = (store: RootState) => store.CarPreview
