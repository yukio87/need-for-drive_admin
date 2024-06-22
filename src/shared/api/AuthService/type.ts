import { Car, Order } from '@/types/type'

interface City {
  createdAt: string
  id: number
  name: string
  updatedAt: string
}

export interface Headers {
  [key: string]: string
}

export interface OrdersResponse {
  count: number
  data: Order[]
}

export interface CitiesResponse {
  count: number
  data: City[]
}

export interface CarsResponse {
  count: number
  data: Car[]
}

export interface ErrorResponse {
  status: number
}

export interface CarsParams {
  limit: string
  page: string
}
