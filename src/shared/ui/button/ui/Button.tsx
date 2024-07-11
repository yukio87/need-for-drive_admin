import { FC } from 'react'

import styles from './Button.module.scss'
import { ButtonProps } from './type'

const { button } = styles

export const Button: FC<ButtonProps> = ({
  children,
  variations = 'primary',
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`${button} ${styles[variations]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
