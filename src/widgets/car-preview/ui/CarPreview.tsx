import { FC } from 'react'

import styles from './CarPreview.module.scss'
import { Description, ImageSelect, ProgressBar } from './components'
import { CarPreviewProps } from './type'

const { 'car-preview': carPreview } = styles

export const CarPreview: FC<CarPreviewProps> = ({ car }) => {
  const { description } = car

  return (
    <div className={carPreview}>
      <ImageSelect car={car} />
      <ProgressBar />
      <Description description={description} />
    </div>
  )
}
