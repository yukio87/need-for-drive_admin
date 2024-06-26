import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { routesPaths } from '@/shared/consts/routesPaths'
import { getNumberWithSpaces } from '@/shared/lib/format'
import { ButtonGroup } from '@/shared/ui/button-group'

import styles from './CarRow.module.scss'
import { CarRowProps } from './type'

const {
  'car-row': carRow,
  img,
  'car-info': carInfo,
  'car-styles': carStyles,
  category,
  'colors-container': colorsContainer,
  'colors-styles': colorsStyles,
  'price-container': priceContainer,
  price,
  'button-group': buttonGroup,
} = styles

export const CarRow: FC<CarRowProps> = ({ car }) => {
  const navigate = useNavigate()

  const { pathCarCard } = routesPaths
  const { categoryId, colors, name, thumbnail, priceMin, priceMax } = car

  const handleClickCheck = () => {
    // console.log(`click check on car with id ${car.id}`)
  }

  const handleClickReject = () => {
    // console.log(`click reject on car with id ${car.id}`)
  }

  const handleClickEdit = () => navigate(`${pathCarCard}/${car.id}`)

  return (
    <div className={carRow}>
      <img className={img} alt="car" src={thumbnail.path} />
      <div className={carInfo}>
        <span className={carStyles}>{name}</span>
        <p>
          <span>В категории: </span>
          <span className={category}>{categoryId.name}</span>
        </p>
      </div>
      <div className={colorsContainer}>
        <span>Цвет:</span>
        <div className={colorsStyles}>
          {colors
            .map((item, i) => (i === 0 ? item : item.toLowerCase()))
            .join(', ')}
        </div>
      </div>
      <div className={priceContainer}>
        <span>Цена:</span>
        <p>
          <span>от</span>
          <span className={price}>{` ${getNumberWithSpaces(
            priceMin,
          )} ₽ `}</span>
          <span>до</span>
          <span className={price}>{` ${getNumberWithSpaces(priceMax)} ₽`}</span>
        </p>
      </div>
      <div className={buttonGroup}>
        <ButtonGroup
          onClickCheck={handleClickCheck}
          onClickReject={handleClickReject}
          onlickEdit={handleClickEdit}
        />
      </div>
    </div>
  )
}
