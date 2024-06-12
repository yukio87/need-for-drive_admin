import { Order } from '@/types/type'

interface City {
  createdAt: string
  id: number
  name: string
  updatedAt: string
}

interface CategoryId {
  createdAt: string
  description: string
  id: number
  name: string
  updatedAt: string
}

interface Thumbnail {
  path: string
  size: number
}

interface Car {
  categoryId: CategoryId
  colors: string[]
  createdAt: string
  description: string
  id: number
  name: string
  number: string
  priceMax: number
  priceMin: number
  tank: string
  thumbnail: Thumbnail
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

export interface RequestParams {
  [key: string]: string
}
