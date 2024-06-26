import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { InputErrMsg } from '@/entities/input-err-msg'
import { useInputValidation } from '@/shared/lib/hooks/useInputValidation'
import { Checkbox } from '@/shared/ui/checkbox'

import { getColors, setColor, setIsValid } from '../../../model/slice'
import styles from './InputAddColor.module.scss'
import { requiredValidation } from './lib/requiredValidation'
import { InputAddColorProps } from './type'

const {
  'input-add-color': inputAddColor,
  'form-input': formInput,
  label,
  'input-container': inputContainer,
  input,
  btn,
  checkboxes,
} = styles

export const InputAddColor: FC<InputAddColorProps> = ({ children, id }) => {
  const colors = useSelector(getColors)
  const dispatch = useDispatch()

  const { value, error, handleChange, setValue } = useInputValidation(
    '',
    requiredValidation,
  )

  useEffect(() => {
    dispatch(setIsValid({ pointName: 'colorIsValid', value: !error }))
  }, [dispatch, error])

  const handleClick = () => {
    dispatch(setColor(value))
    setValue('')
  }

  return (
    <div className={inputAddColor}>
      <div className={formInput}>
        <label className={label} htmlFor={id}>
          {children}
        </label>
        <div className={inputContainer}>
          <input
            className={input}
            type="text"
            id={id}
            value={value}
            onChange={handleChange}
          />
          <button
            disabled={!!error || !value}
            className={btn}
            onClick={handleClick}
            type="button"
            aria-label="Добавить цвет"
          />
        </div>
        {error && <InputErrMsg errMsg={error} />}
      </div>
      <div className={checkboxes}>
        {colors.map((item) => (
          <span key={item}>
            <Checkbox label={item} defaultChecked={true} />
          </span>
        ))}
      </div>
    </div>
  )
}
