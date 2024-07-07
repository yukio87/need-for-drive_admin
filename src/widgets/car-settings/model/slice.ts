import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { InitialState } from './type'

const initialState: InitialState = {
  colorsObj: {},
}

const carSettingsSlice = createSlice({
  name: 'carSettings',
  initialState,
  reducers: {
    setInitColors(state, { payload }: PayloadAction<string[]>) {
      state.colorsObj = payload.reduce(
        (acc, item) => ({ ...acc, [item]: true }),
        {},
      )
    },
    addColor(state, { payload }: PayloadAction<string>) {
      const correctedColor =
        payload[0].toUpperCase() + payload.slice(1).toLowerCase()

      state.colorsObj = {
        ...state.colorsObj,
        [correctedColor]: true,
      }
    },
    setIsCheckedColor(state, { payload }: PayloadAction<string>) {
      const curVal = state.colorsObj[payload]

      state.colorsObj = {
        ...state.colorsObj,
        [payload]: !curVal,
      }
    },
    resetColors(state) {
      state.colorsObj = {}
    },
  },
})

export const { setInitColors, addColor, setIsCheckedColor, resetColors } =
  carSettingsSlice.actions
export const carSettingsReducer = carSettingsSlice.reducer

export const getColorsObj = (store: RootState) => store.carSettings.colorsObj
