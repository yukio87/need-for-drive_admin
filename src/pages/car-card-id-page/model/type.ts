import { CategoryId, Thumbnail } from '@/types/type'

export interface InitialState {
  description: string
  name: string
  categoryId: CategoryId
  thumbnail: Thumbnail
}

export type Payload = InitialState
