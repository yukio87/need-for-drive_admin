import { FC } from 'react'

import { formatDate, getNumberWithSpaces } from '@/shared/lib/format'
import { Checkbox } from '@/shared/ui/checkbox'
import { Order } from '@/types/type'

import { ButtonGroup } from '../../ButtonGroup/ButtonGroup'
import { labelsList } from '../consts/lists'
import styles from './OrderRow.module.scss'
import { OrderRowProps } from './type'

const {
  'order-row': orderRow,
  'order-info': orderInfo,
  'model-styles': modelStyles,
  city,
  'color-styles': colorStyles,
  checkboxes,
  'price-styles': priceStyles,
  'button-group': buttonGroup,
} = styles

export const OrderRow: FC<OrderRowProps> = ({ order }) => {
  const { carId, cityId, pointId, dateFrom, dateTo, color, price } = order
  const model = carId.name?.slice(carId.name.indexOf(',') + 2)

  return (
    <div className={orderRow}>
      <img alt="car" src={carId.thumbnail.path} />
      <div className={orderInfo}>
        <p>
          <span className={modelStyles}>{model.toUpperCase()}</span>
          <span> в </span>
          <span className={city}>{`${cityId.name}, `}</span>
          <span>{pointId.address}</span>
        </p>
        <p>
          <span>{`${formatDate(dateFrom)} - ${formatDate(dateTo)}`}</span>
        </p>
        <p>
          <span>Цвет: </span>
          <span className={colorStyles}>{color}</span>
        </p>
      </div>
      <div className={checkboxes}>
        {labelsList.map((item) => {
          const isChecked = order[item.id as keyof Order] === true
          return (
            <Checkbox
              defaultChecked={isChecked}
              label={item.label}
              key={item.id}
            />
          )
        })}
      </div>
      <p className={priceStyles}>{`${getNumberWithSpaces(price)} ₽`}</p>
      <div className={buttonGroup}>
        <ButtonGroup order={order} />
      </div>
    </div>
  )
}
