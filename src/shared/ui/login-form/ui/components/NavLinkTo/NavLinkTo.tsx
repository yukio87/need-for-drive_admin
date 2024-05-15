import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './NavLinkTo.module.scss'
import { NavLinkToProps } from './type'

const { link } = styles

export const NavLinkTo: FC<NavLinkToProps> = ({ children, to }) => {
  return (
    <NavLink to={to} className={link}>
      {children}
    </NavLink>
  )
}
