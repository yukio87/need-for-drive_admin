import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ORDERS_PER_PAGE } from '@/shared/consts/perPage'
import { RootState } from '@/types/type'

import { InitialState, Payload } from './type'

const initialState: InitialState = {
  limit: String(ORDERS_PER_PAGE),
  page: '0',
}

const paramsSlice = createSlice({
  name: 'ordersParams',
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
export const ordersParamsReducer = paramsSlice.reducer

export const getOrdersParams = (store: RootState) => store.ordersParams
