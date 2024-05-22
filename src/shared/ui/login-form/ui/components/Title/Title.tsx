import { FC } from 'react'

import styles from './Title.module.scss'
import { TitleProps } from './type'

const { title } = styles

export const Title: FC<TitleProps> = ({ children }) => {
  return <div className={title}>{children}</div>
}
