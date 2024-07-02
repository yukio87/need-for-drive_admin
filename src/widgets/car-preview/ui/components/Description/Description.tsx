import { FC } from 'react'

import { InputErrMsg } from '@/entities/input-err-msg'

import styles from './Description.module.scss'
import { DescriptionProps } from './type'

const {
  'description-container': descriptionContainer,
  header,
  'text-area': textArea,
} = styles

export const Description: FC<DescriptionProps> = ({ register, errors }) => {
  return (
    <div className={descriptionContainer}>
      <p className={header}>Описание</p>
      <textarea
        className={textArea}
        maxLength={150}
        {...register('description', {
          required: 'Поле обязательно к заполнению',
        })}
      />
      {errors.description && (
        <InputErrMsg errMsg={errors.description.message} />
      )}
    </div>
  )
}
