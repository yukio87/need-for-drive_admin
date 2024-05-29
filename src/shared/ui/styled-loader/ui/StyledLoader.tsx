import { FC } from 'react'

import styles from './StyledLoader.module.scss'
import { StyledLoaderProps } from './type'

const { 'styled-loader': styledLoader } = styles

export const StyledLoader: FC<StyledLoaderProps> = ({ children }) => {
  return <div className={styledLoader}>{children}</div>
}
