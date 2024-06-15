import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit'

export interface PaginationProps {
  pagesAmount: number
  params: {
    [key: string]: string
  }
  actionCreator: ActionCreatorWithOptionalPayload<
    { [key: string]: string },
    string
  >
}
