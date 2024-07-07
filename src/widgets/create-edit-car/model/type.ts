import { CategoryId, Thumbnail } from '@/types/type'

export interface InitialState {
  categoryId: CategoryId
  description: string
  name: string
  priceMax: number
  priceMin: number
  thumbnail: Thumbnail
}

export type Payload = InitialState
