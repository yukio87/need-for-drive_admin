import { useDispatch, useSelector } from 'react-redux'

import { Button } from '@/shared/ui/button'

import { clearInputs, getIsFiltered } from '../../../model/slice'
import styles from './FilterButtonGroup.module.scss'

const { 'filter-button-group': filterButtonGroup } = styles

export const FilterButtonGroup = () => {
  const isFiltered = useSelector(getIsFiltered)
  const dispatch = useDispatch()

  const handleApply = () => {
    // console.log('click apply')
  }

  const handleReset = () => {
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
