import { FC } from 'react'

import styles from './LayoutLogin.module.scss'
import { LayoutLoginProps } from './type'

const { layout } = styles

export const LayoutLogin: FC<LayoutLoginProps> = ({ children }) => {
  return <div className={layout}>{children}</div>
}
