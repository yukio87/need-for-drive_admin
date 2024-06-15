import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Icon } from '@/shared/ui/icon'

import { activeIconStyles, iconStyles } from '../../../consts/styles'
import styles from './ListItem.module.scss'
import { ListItemProps } from './type'

const {
  'nav-link': navLink,
  'list-item': listItem,
  'text-wrapper': textWrapper,
  text,
  active,
} = styles

export const ListItem: FC<ListItemProps> = ({ item }) => {
  return (
    <NavLink
      to={item.navPath}
      className={({ isActive }) => [isActive ? active : '', navLink].join(' ')}
    >
      {({ isActive }) => (
        <div className={listItem}>
          <div className={textWrapper}>
            <Icon
              name={item.navIconName}
              styles={isActive ? activeIconStyles : iconStyles}
            />
            <span className={text}>{item.navText}</span>
          </div>
        </div>
      )}
    </NavLink>
  )
}
