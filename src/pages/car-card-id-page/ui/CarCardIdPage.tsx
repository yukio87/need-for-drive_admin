import { useQuery } from '@tanstack/react-query'
import { createContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { Loader } from '@/shared/ui/loader'
import { CarCardInputs } from '@/types/type'
import { CarPreview } from '@/widgets/car-preview'
import { CarSettings, selectCheckedColors } from '@/widgets/car-settings'

import { selectDefaultInputsVal } from '../model/slice'
import styles from './CarCardPage.module.scss'
import { FormContextType } from './type'

const { 'car-card-layout': carCardLayout, title } = styles

export const FormContext = createContext<FormContextType>(null)

export const CarCardIdPage = () => {
  const { carId } = useParams()
  const defaultInputsVal = useSelector(selectDefaultInputsVal)
  // Временно
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const colors = useSelector(selectCheckedColors)

  const { isLoading, data: car } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => AuthService.getCar(carId),
    throwOnError: true,
    select: (data) => data.data.data,
  })

  const methods = useForm<CarCardInputs>({
    mode: 'onSubmit',
    defaultValues: defaultInputsVal,
  })

  const onSubmit: SubmitHandler<CarCardInputs> = (data) => {
    // Временно
    // eslint-disable-next-line no-console
    console.log(data)
  }

  if (isLoading) return <Loader size="45px" animation="grow" />

  return (
    <FormContext.Provider value={methods}>
      <form className={carCardLayout} onSubmit={methods.handleSubmit(onSubmit)}>
        <h1 className={title}>Карточка автомобиля</h1>
        <CarPreview car={car} />
        <CarSettings car={car} />
      </form>
    </FormContext.Provider>
  )
}
