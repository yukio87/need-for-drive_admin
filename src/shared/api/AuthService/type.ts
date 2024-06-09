import { Order } from '@/types/type'

export interface Headers {
  [key: string]: string
}

export interface OrdersResponse {
  count: number
  data: Order[]
}

export interface ErrorResponse {
  status: number
}
