import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/shared/ui/button'

import {
  clearInputs,
  getIsFiltered,
} from '../../../model/filterSlice/filterSlice'
import { getSelectedStringId } from '../../../model/filterSlice/selectors'
import { clearParams, setParams } from '../../../model/paramsSlice/paramsSlice'
import styles from './FilterButtonGroup.module.scss'

const { 'filter-button-group': filterButtonGroup } = styles

export const FilterButtonGroup = () => {
  const isFiltered = useSelector(getIsFiltered)
  const { selectedCarId, selectedCityId } = useSelector(getSelectedStringId)
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
    dispatch(clearInputs())
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
