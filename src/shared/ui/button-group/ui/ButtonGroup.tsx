import { FC } from 'react'

import { Icon } from '@/shared/ui/icon'

import {
  iconStylesCheck,
  iconStylesEdit,
  iconStylesReject,
} from '../consts/styles'
import styles from './ButtonGroup.module.scss'
import { ButtonGroupProps } from './type'

const { 'button-group': buttonGroup, 'text-wrapper': textWrapper } = styles

export const ButtonGroup: FC<ButtonGroupProps> = ({
  onClickCheck,
  onClickReject,
  onlickEdit,
}) => {
  return (
    <div className={buttonGroup}>
      <button type="button" onClick={onClickCheck}>
        <div className={textWrapper}>
          <Icon name="IconCheck" styles={iconStylesCheck} />
          <span>Готово</span>
        </div>
      </button>
      <button type="button" onClick={onClickReject}>
        <div className={textWrapper}>
          <Icon name="IconReject" styles={iconStylesReject} />
          <span>Отмена</span>
        </div>
      </button>
      <button type="button" onClick={onlickEdit}>
        <div className={textWrapper}>
          <Icon name="IconEdit" styles={iconStylesEdit} />
          <span>Изменить</span>
        </div>
      </button>
    </div>
  )
}
