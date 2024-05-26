import { FC } from 'react'

import styles from './StyledAppLayout.module.scss'
import { StyledAppLayoutProps } from './type'

const { 'styled-app-layout': styledAppLayout } = styles

export const StyledAppLayout: FC<StyledAppLayoutProps> = ({ children }) => {
  return <div className={styledAppLayout}>{children}</div>
}
