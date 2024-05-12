import { Icon } from '@/shared/ui/icon'

import { iconBasicStyles } from './consts/styles'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <div className={styles.logo}>
      <Icon name="iconArrow" styles={iconBasicStyles} />
      <span className={styles.text}>Need for drive</span>
    </div>
  )
}
