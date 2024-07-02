import { FC, useContext } from 'react'

import { FormContext } from '@/pages/car-card-id-page'

import styles from './CarPreview.module.scss'
import { Description, ImageSelect, ProgressBar } from './components'
import { CarPreviewProps } from './type'

const { 'car-preview': carPreview } = styles

export const CarPreview: FC<CarPreviewProps> = ({ car }) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useContext(FormContext)

  return (
    <div className={carPreview}>
      <ImageSelect car={car} register={register} errors={errors} />
      <ProgressBar getValues={getValues} errors={errors} />
      <Description register={register} errors={errors} />
    </div>
  )
}
