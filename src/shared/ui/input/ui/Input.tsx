import { FC } from 'react'

import { Icon } from '../../icon'
import { iconStyles } from '../consts/styles'
import styles from './Input.module.scss'
import { InputProps } from './type'

const { 'form-input': formInput, 'icon-wrapper': iconWrapper } = styles

export const Input: FC<InputProps> = ({
  size = 'small',
  hasLabel = false,
  children,
  id,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={formInput}>
      {hasLabel && <label htmlFor={id}>{children}</label>}
      {size === 'big' && (
        <div className={iconWrapper}>
          <Icon name="IconSearch" styles={iconStyles} />
        </div>
      )}

      <input
        className={styles[size]}
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
