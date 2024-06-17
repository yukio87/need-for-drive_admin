import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { InitialState, Payload } from './type'

const initialState: InitialState = {
  'sort[name]': '',
}

const sortSlice = createSlice({
  name: 'cars/sort',
  initialState,
  reducers: {
    setSort(state, { payload }: PayloadAction<Payload>) {
      const { pointName, value } = payload

      return {
        [`sort[${pointName}]`]: value,
      }
    },
    clearSort() {
      return initialState
    },
  },
})

export const { setSort, clearSort } = sortSlice.actions
export const carsSortReducer = sortSlice.reducer

export const getSortedBy = (store: RootState) => store.carsSort
export const getIsSorted = (store: RootState) => {
  return !!Object.values(store.carsSort)[0]
}
