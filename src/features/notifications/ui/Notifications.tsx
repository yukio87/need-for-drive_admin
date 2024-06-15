import { useSelector } from 'react-redux'

import { Icon } from '@/shared/ui/icon'

import { iconBasicStyles } from '../consts/styles'
import { getNotifications } from '../model/slice'
import styles from './Notifications.module.scss'

const {
  'notifications-container': notificationsContainer,
  'icon-wrapper': iconWrapper,
  circle,
  amount,
} = styles

export const Notifications = () => {
  const notifications = useSelector(getNotifications)

  const handleClick = () => {}

  return (
    <div
      className={notificationsContainer}
      onClick={handleClick}
      aria-hidden={true}
    >
      <div className={iconWrapper}>
        <Icon name="IconBell" styles={iconBasicStyles} />
        {notifications.length > 0 && (
          <div className={circle}>
            <span className={amount}>{notifications.length}</span>{' '}
          </div>
        )}
      </div>
    </div>
  )
}
