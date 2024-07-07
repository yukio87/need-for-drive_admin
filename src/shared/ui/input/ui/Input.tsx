import { forwardRef, RefObject } from 'react'

import styles from './Input.module.scss'
import { InputProps } from './type'

const { 'form-input': formInput, label, input, 'input-err': inputErr } = styles

export const Input = forwardRef(
  (props: InputProps, ref: RefObject<HTMLInputElement>) => {
    const { children, id, isError, ...rest } = props

    return (
      <div className={formInput}>
        <label className={label} htmlFor={id}>
          {children}
        </label>
        <input
          className={`${isError ? inputErr : input}`}
          id={id}
          ref={ref}
          {...rest}
        />
      </div>
    )
  },
)
