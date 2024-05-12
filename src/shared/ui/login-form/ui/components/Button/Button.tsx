import styles from './Button.module.scss'
import { ButtonProps } from './types/types'

export function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button} type="submit">
      {children}
    </button>
  )
}
