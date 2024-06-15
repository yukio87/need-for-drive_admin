import { createSelector } from '@reduxjs/toolkit'

import { getFilteredBy } from './filterSlice'

export const getSelectedStringId = createSelector([getFilteredBy], (a) => ({
  selectedCarId: a.selectedCar[0]?.id ? String(a.selectedCar[0].id) : '',
  selectedCityId: a.selectedCity[0]?.id ? String(a.selectedCity[0].id) : '',
}))
