import { store } from '@/app/store/store'

export type RootState = ReturnType<typeof store.getState>

export interface AuthResponse {
  access_token: string
  refresh_token: string
}

export interface Order {
  carId: carId
  cityId: cityId
  color: string
  createdAt: string
  dateFrom: string
  dateTo: string
  id: number
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
  orderStatusId: OrderStatusId | null
  pointId: PointId
  price: number
  rateId: RateId
  updatedAt: string
}

interface carId {
  category_id: number
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

export interface Thumbnail {
  path: string
  size: number
}

interface cityId {
  createdAt: string
  id: number
  name: string
  updatedAt: string
}

interface OrderStatusId {
  createdAt: string
  id: number
  name: string
  updatedAt: string
}

interface PointId {
  address: string
  city_id: number
  createdAt: string
  id: number
  name: string
  updatedAt: string
}

interface RateId {
  createdAt: string
  id: number
  price: string
  rateType_id: number
  updatedAt: string
}

export interface Car {
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

export interface CategoryId {
  createdAt: string
  description: string
  id: number
  name: string
  updatedAt: string
}

export interface OrdersParams {
  page: string
  carId: string
  cityId: string
}

export interface CarsSortPayload {
  pointName: 'name' | 'priceMin'
  value: '1' | '-1'
}

export interface CarCardInputs {
  categoryId: CategoryId[]
  colors: string
  description: string
  name: string
  priceMax: string
  priceMin: string
  thumbnail: FileList
}

export interface CarRequestBody {
  priceMax: string
  priceMin: string
  name: string
  thumbnail: Thumbnail
  description: string
  categoryId: CategoryId
  colors: string[]
}

export interface MutateCarResponse {
  data: {
    categoryId: CategoryId
    colors: string[]
    createdAt: string
    description: string
    id: number
    name: string
    priceMax: number
    priceMin: number
    tank: null | string
    thumbnail: Thumbnail
  }
}
