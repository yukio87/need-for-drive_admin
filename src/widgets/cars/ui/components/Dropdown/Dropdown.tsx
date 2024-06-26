import { FC } from 'react'
import DropdownB from 'react-bootstrap/Dropdown'
import { useDispatch } from 'react-redux'

import { CarsSortPayload } from '@/types/type'

import { setSort } from '../../../model/sortSlice/sortSlice'
import { dropdownItemList } from './consts/dropdownItemList'
import styles from './Dropdown.module.scss'
import { DropdownItem, DropdownProps } from './type'

const { dropdown } = styles

export const Dropdown: FC<DropdownProps> = ({
  selectedSortedBy,
  setSelectedSortedBy,
}) => {
  const dispatch = useDispatch()

  const handleSelect = (eventKey: string) => setSelectedSortedBy(eventKey)

  const handleClick = (item: DropdownItem) => {
    dispatch(
      setSort({
        pointName: item.name as CarsSortPayload['pointName'],
        value: item.value as CarsSortPayload['value'],
      }),
    )
  }

  return (
    <DropdownB className={dropdown} onSelect={handleSelect}>
      <DropdownB.Toggle id="dropdown-basic">
        {selectedSortedBy || 'Сортировать'}
      </DropdownB.Toggle>

      <DropdownB.Menu>
        {dropdownItemList.map((item) => (
          <DropdownB.Item
            key={item.label}
            eventKey={item.label}
            onClick={() => handleClick(item)}
          >
            {item.label}
          </DropdownB.Item>
        ))}
      </DropdownB.Menu>
    </DropdownB>
  )
}
