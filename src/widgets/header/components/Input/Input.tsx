import { FC } from 'react'

import { Icon } from '@/shared/ui/icon'

import { iconStyles } from './consts/styles'
import styles from './Input.module.scss'
import { InputProps } from './type'

const {
  'input-container': inputContainer,
  input,
  'icon-wrapper': iconWrapper,
} = styles

export const Input: FC<InputProps> = ({ value, setValue }) => {
  return (
    <div className={inputContainer}>
      <div className={iconWrapper}>
        <Icon name="IconSearch" styles={iconStyles} />
      </div>
      <input
        className={input}
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
