import { createSelector } from '@reduxjs/toolkit'

import { getParams } from '../paramsSlice/paramsSlice'

export const selectAllParams = createSelector([getParams], (params) => {
  const { sortParams, ...otherParams } = params
  return { ...sortParams, ...otherParams }
})
