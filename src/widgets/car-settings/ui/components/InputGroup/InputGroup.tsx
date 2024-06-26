import { useQuery } from '@tanstack/react-query'
import { FC, useContext, useEffect } from 'react'
import { FieldErrors } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { InputErrMsg } from '@/entities/input-err-msg'
import { FormContext } from '@/pages/car-card-id-page'
import AuthService from '@/shared/api/AuthService/AuthService'
import { Input } from '@/shared/ui/input'
import { CarCardInputs } from '@/types/type'

import { setIsValid } from '../../../model/slice'
import { InputAddColor } from '../InputAddColor/InputAddColor'
import styles from './InputGroup.module.scss'
import { InputGroupProps } from './type'

const { 'input-group': inputGroup, 'input-container': inputContainer } = styles

export const InputGroup: FC<InputGroupProps> = ({ car }) => {
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
  } = useContext(FormContext)

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => AuthService.getCategories(),
    select: (data) => data.data.data.map((item) => item.name),
    throwOnError: true,
  })

  useEffect(() => {
    dispatch(setIsValid({ pointName: 'modelIsValid', value: !errors.name }))
  }, [dispatch, errors.name])

  useEffect(() => {
    dispatch(
      setIsValid({ pointName: 'categoryIsValid', value: !errors.categoryId }),
    )
  }, [dispatch, errors.categoryId])

  return (
    <div className={inputGroup}>
      <div className={inputContainer}>
        <Input
          id="name"
          defaultValue={car.name}
          isError={!!errors.name}
          register={register}
          registerOptions={{
            required: 'Поле обязательно к заполнению',
            maxLength: {
              value: 150,
              message: 'Максимальное кол-во символов: 150',
            },
          }}
        >
          Модель автомобиля
        </Input>
        {errors.name && (
          <InputErrMsg
            errMsg={(errors as FieldErrors<CarCardInputs>).name.message}
          />
        )}
      </div>
      <div className={inputContainer}>
        <Input
          id="categoryId"
          defaultValue={car.categoryId.name}
          isError={!!errors.categoryId}
          register={register}
          registerOptions={{
            required: 'Поле обязательно к заполнению',
            maxLength: {
              value: 150,
              message: 'Максимальное кол-во символов: 150',
            },
            validate: (v) =>
              categories?.some((item) => v === item) ||
              'Укажите существующий тип',
          }}
        >
          Тип автомобиля
        </Input>
        {errors.categoryId && (
          <InputErrMsg
            errMsg={(errors as FieldErrors<CarCardInputs>).categoryId.message}
          />
        )}
      </div>
      <InputAddColor id="input-add-color">Доступные цвета</InputAddColor>
    </div>
  )
}
