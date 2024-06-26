import { FC, useState } from 'react'

import styles from './FileInput.module.scss'
import { FileInputProps } from './type'

const { 'file-input': fileInput, input, label } = styles

export const FileInput: FC<FileInputProps> = ({ register, keyName }) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedFile(e.target.files[0])

  return (
    <div className={fileInput}>
      <input
        className={input}
        type="file"
        id="fileInput"
        onChange={handleChange}
        {...register(keyName, { onChange: handleChange })}
      />
      <label className={label} htmlFor="fileInput">
        <span>{selectedFile?.name || 'Выберите файл...'}</span>
        <span>Обзор</span>
      </label>
    </div>
  )
}
