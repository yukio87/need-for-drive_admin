import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/shared/ui/button'

import {
  clearSelected,
  getIsFiltered,
  getSelected,
} from '../../../model/filterSlice/filterSlice'
import { clearParams, setParams } from '../../../model/paramsSlice/paramsSlice'
import styles from './FilterButtonGroup.module.scss'

const { 'filter-button-group': filterButtonGroup } = styles

export const FilterButtonGroup = () => {
  const isFiltered = useSelector(getIsFiltered)
  const { selectedCarId, selectedCityId } = useSelector(getSelected)
  const dispatch = useDispatch()

  const handleApply = () => {
    dispatch(
      setParams({
        page: '0',
        carId: selectedCarId,
        cityId: selectedCityId,
      }),
    )
  }

  const handleReset = () => {
    dispatch(clearParams())
    dispatch(clearSelected())
  }

  return (
    <div className={filterButtonGroup}>
      {isFiltered && (
        <Button onClick={handleReset} variations="danger">
          Отменить
        </Button>
      )}
      <Button onClick={handleApply}>Применить</Button>
    </div>
  )
}
