import { FC } from 'react'
import DropdownB from 'react-bootstrap/Dropdown'
import { useDispatch } from 'react-redux'

import { setSort } from '../../../model/sortSlice/sortSlice'
import { dropdownItemList } from './consts/dropdownItemList'
import styles from './Dropdown.module.scss'
import { DropdownProps } from './type'

const { dropdown } = styles

export const Dropdown: FC<DropdownProps> = ({
  selectedSortedBy,
  setSelectedSortedBy,
}) => {
  const dispatch = useDispatch()

  const handleSelect = (eventKey: string) => setSelectedSortedBy(eventKey)

  const sortHandlers = {
    handleIncreaseBrand: () =>
      dispatch(setSort({ pointName: 'name', value: '-1' })),
    handleDecreaseBrand: () =>
      dispatch(setSort({ pointName: 'name', value: '1' })),
    handleIncreasePrice: () =>
      dispatch(setSort({ pointName: 'priceMin', value: '-1' })),
    handleDecreasePrice: () =>
      dispatch(setSort({ pointName: 'priceMin', value: '1' })),
  }

  return (
    <DropdownB className={dropdown} onSelect={handleSelect}>
      <DropdownB.Toggle id="dropdown-basic">
        {selectedSortedBy || 'Сортировать'}
      </DropdownB.Toggle>

      <DropdownB.Menu>
        {dropdownItemList.map((item) => (
          <DropdownB.Item
            key={item.eventKey}
            eventKey={item.eventKey}
            onClick={
              sortHandlers[item.onClickHandler as keyof typeof sortHandlers]
            }
          >
            {item.eventKey}
          </DropdownB.Item>
        ))}
      </DropdownB.Menu>
    </DropdownB>
  )
}
