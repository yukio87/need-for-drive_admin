import styles from './Title.module.scss'
import { TitleProps } from './types/types'

export function Title({ children }: TitleProps) {
  return <div className={styles.title}>{children}</div>
}
