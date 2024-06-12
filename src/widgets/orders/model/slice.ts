import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { InitialState, Payload } from './type'

const initialState: InitialState = {
  selectedCar: [],
  selectedCity: [],
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedPoint(state, { payload }: PayloadAction<Payload>) {
      const { pointName, selected } = payload
      state[pointName as keyof InitialState] = selected
    },
    clearInputs() {
      return initialState
    },
  },
})

export const { setSelectedPoint, clearInputs } = filtersSlice.actions
export const filterReducer = filtersSlice.reducer

export const getFilteredBy = (store: RootState) => store.filters
export const getIsFiltered = (store: RootState) => {
  return !!Object.values(store.filters).flat(Infinity).length
}
