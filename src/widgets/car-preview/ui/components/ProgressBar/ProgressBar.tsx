import { FC } from 'react'
import ProgressBarB from 'react-bootstrap/ProgressBar'

import styles from './ProgressBar.module.scss'
import { ProgressBarProps } from './type'

const { 'progress-bar': progressBar, text } = styles

export const ProgressBar: FC<ProgressBarProps> = ({ getValues, errors }) => {
  const amountAllFields = Object.keys(getValues()).length
  const amountInvalidFields = Object.keys(errors).length
  const percentageValidFields = Math.abs(
    Math.ceil((amountInvalidFields / amountAllFields - 1) * 100),
  )

  return (
    <div className={progressBar}>
      <div className={text}>
        <span>Заполнено</span>
        <span>{percentageValidFields}%</span>
      </div>
      <ProgressBarB now={percentageValidFields} />
    </div>
  )
}
