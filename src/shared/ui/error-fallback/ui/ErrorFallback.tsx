import { ErrorFallbackProps } from '../types/types'
import styles from './ErrorFallback.module.scss'

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  return (
    <div role="alert" className={styles.container}>
      <h6>Что-то пошло не так...</h6>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary} type="button">
        Повторить
      </button>
    </div>
  )
}
