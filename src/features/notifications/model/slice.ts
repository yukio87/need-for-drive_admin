import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '@/types/type'

import { InitialState, Notification } from './type'

const initialState: InitialState = {
  notifications: [],
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, { payload }: PayloadAction<Notification>) {
      state.notifications.push(payload)
    },
    deleteNotification(state, { payload }: PayloadAction<number>) {
      state.notifications = state.notifications.filter(
        (item: Notification) => item.id !== payload,
      )
    },
  },
})

export const { addNotification, deleteNotification } =
  notificationsSlice.actions
export const notificationReducer = notificationsSlice.reducer

export const getNotifications = (store: RootState) =>
  store.notifications.notifications
