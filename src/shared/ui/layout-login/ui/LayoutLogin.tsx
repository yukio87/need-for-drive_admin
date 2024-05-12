import { Children } from '@/types/types'

import styles from './LayoutLogin.module.scss'

export function LayoutLogin({ children }: Children) {
  return <div className={styles.layout}>{children}</div>
}
