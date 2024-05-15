import { FC } from 'react'

import styles from './Button.module.scss'
import { ButtonProps } from './type'

const { button } = styles

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className={button} type="submit">
      {children}
    </button>
  )
}
