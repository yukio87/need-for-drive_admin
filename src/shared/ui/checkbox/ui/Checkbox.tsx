import { FC } from 'react'

import styles from './Checkbox.module.scss'
import { CheckboxProps } from './type'

const { 'form-checkbox': formCheckbox } = styles

export const Checkbox: FC<CheckboxProps> = ({
  label,
  onChange,
  id,
  name,
  value,
  checked,
  defaultChecked,
  disabled,
}) => {
  return (
    <div className={formCheckbox}>
      <input
        onChange={onChange}
        value={value}
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
