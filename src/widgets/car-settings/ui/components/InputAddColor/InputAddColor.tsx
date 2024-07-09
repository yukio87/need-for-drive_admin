import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { InputErrMsg } from '@/entities/input-err-msg'
import { Checkbox } from '@/shared/ui/checkbox'

import { selectColors } from '../../../model/selectors'
import {
  addColor,
  getColorsObj,
  resetColors,
  setIsCheckedColor,
} from '../../../model/slice'
import styles from './InputAddColor.module.scss'
import { InputAddColorProps } from './type'

const {
  'input-add-color': inputAddColor,
  'form-input': formInput,
  label,
  'input-container': inputContainer,
  input,
  'input-err': inputErr,
  btn,
  'btn-err': btnErr,
  checkboxes,
} = styles

export const InputAddColor: FC<InputAddColorProps> = ({
  children,
  id,
  isEditSession,
  register,
  errors,
  clearErrors,
}) => {
  const [inputVal, setInputVal] = useState('')
  const colorsObj = useSelector(getColorsObj)
  const colors = useSelector(selectColors)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isEditSession) dispatch(resetColors())
  }, [dispatch, isEditSession])

  const amountChecked = Object.values(colorsObj).filter((item) => item).length
  const isValidColors = !!colors.length
  const isError = !!errors.colors

  const handleClick = () => {
    dispatch(addColor(inputVal))
    clearErrors('colors')
    setInputVal('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputVal(e.target.value)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setIsCheckedColor(e.target.id))

  return (
    <div className={inputAddColor}>
      <div className={formInput}>
        <label className={label} htmlFor={id}>
          {children}
        </label>
        <div className={inputContainer}>
          <input
            className={isError ? inputErr : input}
            type="text"
            id={id}
            value={inputVal}
            onChange={handleInputChange}
            maxLength={30}
            {...register('colors', {
              validate: () => isValidColors || 'Выберите цвет(а)',
              onChange: handleInputChange,
            })}
          />
          <button
            disabled={!inputVal}
            className={isError ? btnErr : btn}
            onClick={handleClick}
            type="button"
            aria-label="Добавить цвет"
          />
        </div>
        {isError && <InputErrMsg errMsg={errors.colors.message} />}
      </div>
      <div className={checkboxes}>
        {Object.entries(colorsObj).map(([color, isChecked]) => {
          const isDisabled = amountChecked === 1 && isChecked

          return (
            <span key={color}>
              <Checkbox
                id={color}
                label={color}
                checked={isChecked}
                onChange={handleCheckboxChange}
                disabled={isDisabled}
              />
            </span>
          )
        })}
      </div>
    </div>
  )
}
