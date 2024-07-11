import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { InitialState, Payload } from './type'

const initialState: InitialState = {
  categoryId: [
    {
      createdAt: '',
      description: '',
      id: 0,
      name: '',
      updatedAt: '',
    },
  ],
  colors: '',
  description: '',
  name: '',
  priceMax: '',
  priceMin: '',
  thumbnail: {
    path: '',
    size: 0,
  },
}

const createEditCarSlice = createSlice({
  name: 'createEditCar',
  initialState,
  reducers: {
    setPrefilledValues(state, { payload }: PayloadAction<Payload>) {
      return payload
    },
  },
})

export const { setPrefilledValues } = createEditCarSlice.actions
export const createEditCarReducer = createEditCarSlice.reducer
