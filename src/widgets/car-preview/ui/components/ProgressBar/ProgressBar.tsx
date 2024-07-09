import { FC } from 'react'
import ProgressBarB from 'react-bootstrap/ProgressBar'
import { useSelector } from 'react-redux'

import { selectColors } from '@/widgets/car-settings'

import styles from './ProgressBar.module.scss'
import { ProgressBarProps } from './type'

const { 'progress-bar': progressBar, text } = styles

export const ProgressBar: FC<ProgressBarProps> = ({ watch }) => {
  const colors = useSelector(selectColors)

  const amountAllFields = Object.keys(watch()).length
  const amountValidFields = Object.entries(watch()).filter(([key, value]) => {
    if (key === 'colors') return !!colors.length
    if (value instanceof FileList) return value.length > 0
    return !!value
  }).length

  const percentageValidFields = Math.abs(
    Math.ceil((amountValidFields / amountAllFields) * 100),
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
