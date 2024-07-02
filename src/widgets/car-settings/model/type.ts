import { CategoryId } from '@/types/type'

export interface InitialState {
  colorsObj: {
    [key: string]: boolean
  }
  categoryId: CategoryId
}

export type categoryIdPayload = CategoryId
