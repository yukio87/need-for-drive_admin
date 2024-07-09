import { FC } from 'react'

import { Button } from '../../button'
import styles from './ErrorFallback.module.scss'
import { ErrorFallbackProps } from './type'

const { 'error-fallback': errorFallback, text } = styles

export const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role="alert" className={errorFallback}>
      <div className={text}>
        <p>{error.response.status}</p>
        <p>Что то пошло не так</p>
        <p>Попробуйте перезагрузить страницу</p>
      </div>
      <Button onClick={resetErrorBoundary}>Назад</Button>
    </div>
  )
}
