import { createSelector } from '@reduxjs/toolkit'

import { getCarPreviewIsValid } from '@/widgets/car-preview'

import { selectCarSettingsIsValid } from './slice'

export const selectValidPercentage = createSelector(
  [selectCarSettingsIsValid, getCarPreviewIsValid],
  (a, b) => {
    const amountValid = Object.values({ ...a, ...b }).filter(Boolean).length
    const percentageValid = Math.floor(
      (amountValid / Object.values({ ...a, ...b }).length) * 100,
    )

    return percentageValid
  },
)
