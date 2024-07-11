import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

export const selectColors = createSelector(
  [(store: RootState) => store.carSettings.colorsObj],
  (a) =>
    Object.entries(a).reduce((acc: string[], [color, isChecked]) => {
      if (isChecked) acc.push(color)
      return acc
    }, []),
)
