import PaginationMui from '@mui/material/Pagination'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getDevice } from '@/app/store/slice'

import { PaginationProps } from './type'

export const Pagination: FC<PaginationProps> = ({
  pagesAmount,
  params,
  actionCreator,
}) => {
  const device = useSelector(getDevice)
  const dispatch = useDispatch()

  return (
    <PaginationMui
      color="primary"
      count={pagesAmount}
      page={Number(params.page) + 1}
      onChange={(_: React.ChangeEvent<unknown>, page: number) => {
        dispatch(
          actionCreator({
            page: String(page - 1),
          }),
        )
      }}
      size={device === 'mobile' ? 'small' : 'medium'}
      siblingCount={device === 'mobile' ? 0 : 1}
    />
  )
}
