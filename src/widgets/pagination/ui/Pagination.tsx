import PaginationMui from '@mui/material/Pagination'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import { getDevice } from '@/app/store/slice'

import { PaginationProps } from './type'

export const Pagination: FC<PaginationProps> = ({
  pagesAmount,
  activePage,
  setActivePage,
}) => {
  const device = useSelector(getDevice)

  return (
    <PaginationMui
      color="primary"
      count={pagesAmount}
      page={activePage}
      onChange={(_: React.ChangeEvent<unknown>, page: number) =>
        setActivePage(page)
      }
      size={device === 'mobile' ? 'small' : 'medium'}
      siblingCount={device === 'mobile' ? 0 : 1}
    />
  )
}
