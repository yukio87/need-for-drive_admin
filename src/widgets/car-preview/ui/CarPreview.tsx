import { FC, useContext } from 'react'

import { FormContext } from '@/pages/create-edit-car-page'

import styles from './CarPreview.module.scss'
import { Description, ImageSelect, ProgressBar } from './components'
import { CarPreviewProps } from './type'

const { 'car-preview': carPreview } = styles

export const CarPreview: FC<CarPreviewProps> = ({ car, isEditSession }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useContext(FormContext)

  return (
    <div className={carPreview}>
      <ImageSelect
        car={car}
        isEditSession={isEditSession}
        register={register}
        errors={errors}
      />
      <ProgressBar watch={watch} />
      <Description register={register} errors={errors} />
    </div>
  )
}
