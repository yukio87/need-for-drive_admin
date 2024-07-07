import { forwardRef, RefObject } from 'react'

import styles from './FileInput.module.scss'
import { FileInputProps } from './type'

const { input, label, 'label-err': labelErr } = styles

export const FileInput = forwardRef(
  (props: FileInputProps, ref: RefObject<HTMLInputElement>) => {
    const { selectedFile, isError, ...rest } = props

    return (
      <>
        <input
          className={input}
          type="file"
          id="fileInput"
          ref={ref}
          {...rest}
        />
        <label className={isError ? labelErr : label} htmlFor="fileInput">
          <span>{selectedFile?.name || 'Выберите файл...'}</span>
          <span>Обзор</span>
        </label>
      </>
    )
  },
)
