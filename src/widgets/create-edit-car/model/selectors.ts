import { createSelector } from '@reduxjs/toolkit'

import { base64ToFile } from '@/shared/lib/convert'
import { RootState } from '@/types/type'

export const selectPrefilledValues = createSelector(
  [(store: RootState) => store.createEditCar],
  (a) => {
    const file = base64ToFile(a.thumbnail.path, a.name)

    const dt = new DataTransfer()
    dt.items.add(file)
    const fileList = dt.files

    return {
      ...a,
      thumbnail: fileList,
    }
  },
)
