import { FC, useContext } from 'react'

import { FormContext } from '@/pages/car-card-id-page'
import { FileInput } from '@/shared/ui/file-input'

import styles from './ImageSelect.module.scss'
import { ImageSelectProps } from './type'

const {
  'image-select': imageSelect,
  img,
  'car-info': carInfo,
  'car-name': carName,
  'car-category': carCategory,
} = styles

export const ImageSelect: FC<ImageSelectProps> = ({ car }) => {
  const { register } = useContext(FormContext)

  const { thumbnail, name, categoryId } = car

  return (
    <div className={imageSelect}>
      <img className={img} src={thumbnail.path} alt="car" />
      <div className={carInfo}>
        <span className={carName}>{name}</span>
        <span className={carCategory}>{categoryId.name}</span>
      </div>
      <FileInput register={register} keyName="thumbnail" />
    </div>
  )
}
