import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/shared/ui/button'

import { clearParams, setParams } from '../../../model/paramsSlice/paramsSlice'
import {
  clearSort,
  getIsSorted,
  getSortedBy,
} from '../../../model/sortSlice/sortSlice'
import styles from './FilterButtonGroup.module.scss'
import { FilterButtonGroupProps } from './type'

const { 'filter-button-group': filterButtonGroup } = styles

export const FilterButtonGroup: FC<FilterButtonGroupProps> = ({
  setSelectedSortedBy,
}) => {
  const isSorted = useSelector(getIsSorted)
  const sortedBy = useSelector(getSortedBy)
  const dispatch = useDispatch()

  const [key, value] = Object.entries(sortedBy)[0]

  const handleApply = () => {
    dispatch(
      setParams({
        page: '0',
        [key]: value,
      }),
    )
  }

  const handleReset = () => {
    dispatch(clearParams())
    dispatch(clearSort())
    setSelectedSortedBy('')
  }

  return (
    <div className={filterButtonGroup}>
      {isSorted && (
        <Button onClick={handleReset} variations="danger">
          Отменить
        </Button>
      )}
      <Button onClick={handleApply}>Применить</Button>
    </div>
  )
}
