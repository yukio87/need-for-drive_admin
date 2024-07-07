import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

export const selectCheckedColors = createSelector(
  [(store: RootState) => store.carSettings.colorsObj],
  (a) =>
    Object.entries(a).reduce((acc: string[], [color, isChecked]) => {
      if (isChecked) acc.push(color)
      return acc
    }, []),
)
