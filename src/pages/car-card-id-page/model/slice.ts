import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { base64ToFile } from '@/shared/lib/convert'
import { RootState } from '@/types/type'

import { InitialState, Payload } from './type'

const initialState: InitialState = {
  description: '',
  name: '',
  categoryId: {
    createdAt: '',
    description: '',
    id: 0,
    name: '',
    updatedAt: '',
  },
  thumbnail: {
    path: '',
    size: 0,
  },
}

const carCardIdSlice = createSlice({
  name: 'carCardId',
  initialState,
  reducers: {
    setDefaultInputsVal(state, { payload }: PayloadAction<Payload>) {
      return payload
    },
  },
})

export const { setDefaultInputsVal } = carCardIdSlice.actions
export const carCardIdReducer = carCardIdSlice.reducer

export const selectDefaultInputsVal = createSelector(
  [(store: RootState) => store.carCardId],
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
