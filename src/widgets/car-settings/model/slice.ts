import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { categoryIdPayload, InitialState } from './type'

const initialState: InitialState = {
  colorsObj: {},
  categoryId: {
    createdAt: '',
    description: '',
    id: 0,
    name: '',
    updatedAt: '',
  },
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
      state.colorsObj = {
        ...state.colorsObj,
        [payload]: true,
      }
    },
    setIsCheckedColor(state, { payload }: PayloadAction<string>) {
      const curVal = state.colorsObj[payload]

      state.colorsObj = {
        ...state.colorsObj,
        [payload]: !curVal,
      }
    },
    setCategoryId(state, { payload }: PayloadAction<categoryIdPayload>) {
      state.categoryId = payload
    },
  },
})

export const { setInitColors, addColor, setIsCheckedColor, setCategoryId } =
  carSettingsSlice.actions
export const carSettingsReducer = carSettingsSlice.reducer

export const getColorsObj = (store: RootState) => store.carSettings.colorsObj
export const getCategoryId = (store: RootState) => store.carSettings.categoryId

export const selectCheckedColors = createSelector(
  [(store: RootState) => store.carSettings.colorsObj],
  (a) =>
    Object.entries(a).reduce((acc: string[], [color, isChecked]) => {
      if (isChecked) acc.push(color)
      return acc
    }, []),
)
