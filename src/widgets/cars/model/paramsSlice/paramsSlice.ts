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
      return {
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

export const getParams = (store: RootState) => store.carsParams
