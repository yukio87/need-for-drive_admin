import { NavLink } from 'react-router-dom'

import styles from './NavLinkTo.module.scss'
import { NavLinkToProps } from './types/types'

export function NavLinkTo({ children, to }: NavLinkToProps) {
  return (
    <NavLink to={to} className={styles.link}>
      {children}
    </NavLink>
  )
}
