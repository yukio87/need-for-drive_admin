import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Checkbox } from '@/shared/ui/checkbox'

import { addColor, getColorsObj, setIsCheckedColor } from '../../../model/slice'
import styles from './InputAddColor.module.scss'
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
  const [inputVal, setInputVal] = useState('')
  const colorsObj = useSelector(getColorsObj)
  const dispatch = useDispatch()

  const amountChecked = Object.values(colorsObj).filter((item) => item).length

  const handleClick = () => {
    dispatch(addColor(inputVal))
    setInputVal('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsCheckedColor(e.target.id))
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
            value={inputVal}
            onChange={handleInputChange}
            maxLength={30}
          />
          <button
            disabled={!inputVal}
            className={btn}
            onClick={handleClick}
            type="button"
            aria-label="Добавить цвет"
          />
        </div>
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
