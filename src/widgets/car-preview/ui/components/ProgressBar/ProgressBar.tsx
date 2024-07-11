import { FC } from 'react'
import ProgressBarB from 'react-bootstrap/ProgressBar'
import { useWatch } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { selectColors } from '@/widgets/car-settings'

import styles from './ProgressBar.module.scss'
import { ProgressBarProps } from './type'

const { 'progress-bar': progressBar, text } = styles

export const ProgressBar: FC<ProgressBarProps> = ({ control }) => {
  const colors = useSelector(selectColors)
  const watchedValues = useWatch({ control })

  const amountAllFields = Object.keys(watchedValues).length
  const amountValidFields = Object.entries(watchedValues).filter(
    ([key, value]) => {
      if (key === 'colors') return !!colors.length
      if (value instanceof FileList) return !!value.length
      if (value instanceof Object) return !!value.length
      return !!value
    },
  ).length

  // console.log(watchedValues)

  const percentageValidFields = Math.abs(
    Math.round((amountValidFields / amountAllFields) * 100),
  )

  return (
    <div className={progressBar}>
      <div className={text}>
        <span>Заполнено</span>
        <span>{percentageValidFields || 0}%</span>
      </div>
      <ProgressBarB now={percentageValidFields || 0} />
    </div>
  )
}
