import { FC, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { FormContext } from '@/pages/car-card-id-page'

import { setInitColors } from '../model/slice'
import styles from './CarSettings.module.scss'
import { ButtonGroup, InputGroup } from './components'
import { CarSettingsProps } from './type'

const { 'car-settings': carSettings, header } = styles

export const CarSettings: FC<CarSettingsProps> = ({ car }) => {
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    control,
  } = useContext(FormContext)

  const { colors } = car

  useEffect(() => {
    dispatch(setInitColors(colors))
  }, [colors, dispatch])

  return (
    <div className={carSettings}>
      <h3 className={header}>Настройки автомобиля</h3>
      <InputGroup
        car={car}
        register={register}
        control={control}
        errors={errors}
      />
      <ButtonGroup />
    </div>
  )
}
