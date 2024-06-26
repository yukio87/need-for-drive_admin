import ProgressBarB from 'react-bootstrap/ProgressBar'
import { useSelector } from 'react-redux'

import { selectValidPercentage } from '@/widgets/car-settings'

import styles from './ProgressBar.module.scss'

const { 'progress-bar': progressBar, text } = styles

export const ProgressBar = () => {
  const validPercentage = useSelector(selectValidPercentage)

  return (
    <div className={progressBar}>
      <div className={text}>
        <span>Заполнено</span>
        <span>{validPercentage}%</span>
      </div>
      <ProgressBarB now={validPercentage} />
    </div>
  )
}
