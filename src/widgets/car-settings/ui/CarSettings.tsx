import { FC, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { FormContext } from '@/pages/create-edit-car-page'

import { setInitColors } from '../model/slice'
import styles from './CarSettings.module.scss'
import { ButtonGroup, InputGroup } from './components'
import { CarSettingsProps } from './type'

const { 'car-settings': carSettings, header } = styles

export const CarSettings: FC<CarSettingsProps> = ({
  car,
  isEditSession,
  deleteCar,
}) => {
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    control,
    clearErrors,
  } = useContext(FormContext)

  useEffect(() => {
    if (isEditSession) dispatch(setInitColors(car.colors))
  }, [car?.colors, dispatch, isEditSession])

  return (
    <div className={carSettings}>
      <h3 className={header}>Настройки автомобиля</h3>
      <InputGroup
        car={car}
        isEditSession={isEditSession}
        register={register}
        control={control}
        errors={errors}
        clearErrors={clearErrors}
      />
      <ButtonGroup isEditSession={isEditSession} deleteCar={deleteCar} />
    </div>
  )
}
