import { Icon } from '@/shared/ui/icon'

import { iconStyles } from '../consts/styles'
import styles from './Logo.module.scss'

const { logo, text } = styles

export const Logo = () => {
  return (
    <div className={logo}>
      <Icon name="IconLogo" styles={iconStyles} />
      <span className={text}>Need for drive</span>
    </div>
  )
}
