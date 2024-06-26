import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { InitialState, Payload } from './type'

const initialState: InitialState = {
  colors: [],
  modelIsValid: true,
  categoryIsValid: true,
  colorIsValid: true,
}

const carSettingsSlice = createSlice({
  name: 'carSettings',
  initialState,
  reducers: {
    setColors(state, { payload }: PayloadAction<string[]>) {
      state.colors = payload
    },
    setColor(state, { payload }: PayloadAction<string>) {
      state.colors.unshift(payload)
    },
    setIsValid(state, { payload }: PayloadAction<Payload>) {
      const { pointName, value } = payload
      state[pointName] = value
    },
  },
})

export const { setColors, setColor, setIsValid } = carSettingsSlice.actions
export const carSettingsReducer = carSettingsSlice.reducer

export const selectCarSettingsIsValid = createSelector(
  [(store: RootState) => store.carSettings],
  (a) => ({
    modelIsValid: a.modelIsValid,
    categoryIsValid: a.categoryIsValid,
    colorIsValid: a.colorIsValid,
  }),
)

export const getColors = (store: RootState) => store.carSettings.colors
