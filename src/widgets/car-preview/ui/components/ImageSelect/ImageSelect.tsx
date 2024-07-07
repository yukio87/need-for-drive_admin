import { FC, useState } from 'react'
import { useSelector } from 'react-redux'

import { FileInput } from '@/shared/ui/file-input'
import { selectPrefilledValues } from '@/widgets/create-edit-car'

import styles from './ImageSelect.module.scss'
import { ImageSelectProps } from './type'

const {
  'image-select': imageSelect,
  img,
  'car-info': carInfo,
  'car-name': carName,
  'car-category': carCategory,
  label,
  'file-input-wrapper': fileInputWrapper,
} = styles

export const ImageSelect: FC<ImageSelectProps> = ({
  car,
  isEditSession,
  register,
  errors,
}) => {
  const { thumbnail: defaultFileList } = useSelector(selectPrefilledValues)
  const [selectedFile, setSelectedFile] = useState<File | undefined>(
    isEditSession ? defaultFileList[0] : undefined,
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedFile(e.target.files[0])

  return (
    <div className={imageSelect}>
      {isEditSession ? (
        <>
          <img className={img} src={car.thumbnail.path} alt="car" />
          <div className={carInfo}>
            <span className={carName}>{car.name}</span>
            <span className={carCategory}>{car.categoryId.name}</span>
          </div>
        </>
      ) : (
        <span className={label}>Изображение</span>
      )}
      <div className={fileInputWrapper}>
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
    </div>
  )
}
