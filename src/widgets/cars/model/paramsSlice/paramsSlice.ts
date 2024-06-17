import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CARS_PER_PAGE } from '@/shared/consts/perPage'
import { RootState } from '@/types/type'

import { InitialState, Payload } from './type'

const initialState: InitialState = {
  limit: String(CARS_PER_PAGE),
  page: '0',
}

const paramsSlice = createSlice({
  name: 'carsParams',
  initialState,
  reducers: {
    setParams(state, { payload }: PayloadAction<Payload>) {
      const stateSort = Object.keys(state).reduce((acc, key) => {
        if (!key.startsWith('sort')) acc[key] = state[key]
        return acc
      }, {} as InitialState)

      const isSorting = Object.keys(payload).some((item) =>
        item.startsWith('sort'),
      )

      return isSorting
        ? {
            ...stateSort,
            ...payload,
          }
        : {
            ...state,
            ...payload,
          }
    },
    clearParams() {
      return initialState
    },
  },
})

export const { setParams, clearParams } = paramsSlice.actions
export const carsParamsReducer = paramsSlice.reducer

export const getCarsParams = (store: RootState) => store.carsParams
