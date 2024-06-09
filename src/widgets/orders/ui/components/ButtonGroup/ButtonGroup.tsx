import { FC } from 'react'

import { Icon } from '@/shared/ui/icon'

import styles from './ButtonGroup.module.scss'
import {
  iconStylesCheck,
  iconStylesEdit,
  iconStylesReject,
} from './consts/styles'
import { ButtonGroupProps } from './type'

const { 'button-group': buttonGroup, 'text-wrapper': textWrapper } = styles

// Временно
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ButtonGroup: FC<ButtonGroupProps> = ({ order }) => {
  const handleClickCheck = () => {
    // console.log(`click check on order with id ${order.id}`)
  }

  const handleClickReject = () => {
    // console.log(`click reject on order with id ${order.id}`)
  }

  const handleClickEdit = () => {
    // console.log(`click edit on order with id ${order.id}`)
  }

  return (
    <div className={buttonGroup}>
      <button type="button" onClick={handleClickCheck}>
        <div className={textWrapper}>
          <Icon name="IconCheck" styles={iconStylesCheck} />
          <span>Готово</span>
        </div>
      </button>
      <button type="button" onClick={handleClickReject}>
        <div className={textWrapper}>
          <Icon name="IconReject" styles={iconStylesReject} />
          <span>Отмена</span>
        </div>
      </button>
      <button type="button" onClick={handleClickEdit}>
        <div className={textWrapper}>
          <Icon name="IconEdit" styles={iconStylesEdit} />
          <span>Изменить</span>
        </div>
      </button>
    </div>
  )
}
