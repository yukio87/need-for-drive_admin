import { createSelector } from '@reduxjs/toolkit'

import { getParams } from '../paramsSlice/paramsSlice'
import { getSortedBy } from '../sortSlice/sortSlice'

export const selectAllParams = createSelector(
  [getParams, getSortedBy],
  (params, sortedBy) => {
    const [key, value] = Object.entries(sortedBy)[0]

    return {
      ...params,
      [key]: value,
    }
  },
)
