import { store } from '@/app/store/store'

export type RootState = ReturnType<typeof store.getState>

export interface AuthResponse {
  access_token: string
  refresh_token: string
  user_id: string
}
