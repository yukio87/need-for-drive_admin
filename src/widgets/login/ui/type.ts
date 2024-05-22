import { AuthResponse } from '@/types/type'

export interface LoginData {
  data: AuthResponse
}

export interface ErrorResponse {
  status: number
}
