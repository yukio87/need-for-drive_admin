import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectDefaultInputsVal } from '@/pages/car-card-id-page/model/slice'
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

export const ImageSelect: FC<ImageSelectProps> = ({
  car,
  register,
  errors,
}) => {
  const { thumbnail: defaultFileList } = useSelector(selectDefaultInputsVal)
  const [selectedFile, setSelectedFile] = useState<File | undefined>(
    defaultFileList[0],
  )

  const { thumbnail, name, categoryId } = car

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedFile(e.target.files[0])

  return (
    <div className={imageSelect}>
      <img className={img} src={thumbnail.path} alt="car" />
      <div className={carInfo}>
        <span className={carName}>{name}</span>
        <span className={carCategory}>{categoryId.name}</span>
      </div>
      <FileInput
        {...register('thumbnail', {
          onChange: handleChange,
          validate: (v) => v.length > 0 || 'Выберите файл',
        })}
        selectedFile={selectedFile}
        isError={!!errors.thumbnail}
        accept="image/jpeg, image/png, image/gif, image/bmp"
      />
    </div>
  )
}
