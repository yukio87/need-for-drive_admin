import { FC } from 'react'

import styles from './StyledMain.module.scss'
import { StyledMainProps } from './type'

const { 'styled-main': styledMain } = styles

export const StyledMain: FC<StyledMainProps> = ({ children }) => {
  return <main className={styledMain}>{children}</main>
}
