import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CarsSortPayload, RootState } from '@/types/type'

import { SortParams } from '../type'

const initialState: SortParams = {
  'sort[name]': '',
}

const sortSlice = createSlice({
  name: 'cars/sort',
  initialState,
  reducers: {
    setSort(state, { payload }: PayloadAction<CarsSortPayload>) {
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
