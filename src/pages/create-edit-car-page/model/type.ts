import { CategoryId, Thumbnail } from '@/types/type'

export interface InitialState {
  categoryId: CategoryId[]
  colors: string
  description: string
  name: string
  priceMax: string
  priceMin: string
  thumbnail: Thumbnail
}

export type Payload = InitialState
