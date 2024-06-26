import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { SelectedCar, SelectedCity } from '../../ui/type'
import { InitialState, Payload } from './type'

const initialState: InitialState = {
  selectedCar: [],
  selectedCity: [],
  selectedCarId: '',
  selectedCityId: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedPoint(state, { payload }: PayloadAction<Payload>) {
      const { pointName, selected } = payload

      if (pointName === 'selectedCar') {
        state.selectedCar = selected as SelectedCar[]
        state.selectedCarId = selected[0] ? String(selected[0]?.id) : ''
      } else if (pointName === 'selectedCity') {
        state.selectedCity = selected as SelectedCity[]
        state.selectedCityId = selected[0] ? String(selected[0]?.id) : ''
      }
    },
    clearSelected() {
      return initialState
    },
  },
})

export const { setSelectedPoint, clearSelected } = filtersSlice.actions
export const ordersFiltersReducer = filtersSlice.reducer

export const getSelected = (store: RootState) => store.ordersFilters
export const getIsFiltered = (store: RootState) =>
  !!store.ordersFilters.selectedCarId || !!store.ordersFilters.selectedCityId
