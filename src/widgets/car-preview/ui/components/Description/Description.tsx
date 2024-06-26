import { FC, useContext, useEffect } from 'react'
import { FieldErrors } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { InputErrMsg } from '@/entities/input-err-msg'
import { FormContext } from '@/pages/car-card-id-page'
import { CarCardInputs } from '@/types/type'

import { setIsValid } from '../../../model/slice'
import styles from './Description.module.scss'
import { DescriptionProps } from './type'

const {
  'description-container': descriptionContainer,
  header,
  'text-area': textArea,
} = styles

export const Description: FC<DescriptionProps> = ({ description }) => {
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
  } = useContext(FormContext)

  useEffect(() => {
    dispatch(
      setIsValid({
        pointName: 'descriptionIsValid',
        value: !errors.description,
      }),
    )
  }, [dispatch, errors.description])

  return (
    <div className={descriptionContainer}>
      <p className={header}>Описание</p>
      <textarea
        className={textArea}
        defaultValue={description}
        {...register('description', {
          required: 'Поле обязательно к заполнению',
          maxLength: {
            value: 150,
            message: 'Максимальное кол-во символов: 150',
          },
        })}
      />
      {errors.description && (
        <InputErrMsg
          errMsg={(errors as FieldErrors<CarCardInputs>).description.message}
        />
      )}
    </div>
  )
}
