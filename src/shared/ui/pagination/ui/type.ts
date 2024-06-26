import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit'

export interface PaginationProps {
  pagesAmount: number
  params: {
    page: string
  }
  actionCreator: ActionCreatorWithOptionalPayload<{ page: string }, string>
}
