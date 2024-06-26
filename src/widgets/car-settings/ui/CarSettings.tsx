import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setColors } from '../model/slice'
import styles from './CarSettings.module.scss'
import { ButtonGroup, InputGroup } from './components'
import { CarSettingsProps } from './type'

const { 'car-settings': carSettings, header } = styles

export const CarSettings: FC<CarSettingsProps> = ({ car }) => {
  const dispatch = useDispatch()

  const { colors } = car

  useEffect(() => {
    dispatch(setColors(colors))
  }, [colors, dispatch])

  return (
    <div className={carSettings}>
      <h3 className={header}>Настройки автомобиля</h3>
      <InputGroup car={car} />
      <ButtonGroup />
    </div>
  )
}
