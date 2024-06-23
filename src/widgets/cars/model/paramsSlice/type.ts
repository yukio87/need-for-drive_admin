import { SortParams } from '../type'

export interface InitialState {
  limit: string
  page: string
  sortParams: SortParams
}

export interface Payload {
  page: string
  sortParams: SortParams
}
