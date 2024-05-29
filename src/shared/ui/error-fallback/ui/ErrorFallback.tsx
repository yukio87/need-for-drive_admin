import { FC } from 'react'

import styles from './ErrorFallback.module.scss'
import { ErrorFallbackProps } from './type'

const { container } = styles

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert" className={container}>
      <h6>Что-то пошло не так...</h6>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary} type="button">
        Назад
      </button>
    </div>
  )
}
