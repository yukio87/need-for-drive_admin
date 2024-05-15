import { FC } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { colorGrey } from '@/shared/consts/colors'

import { LoaderProps } from './type'

export const Loader: FC<LoaderProps> = ({
  size,
  animation,
  position = 'center',
  color = colorGrey,
}) => {
  const containerStyles = {
    display: 'grid',
    height: '100%',
    width: '100%',
    color,
  }

  const spinnerStyles = {
    width: size,
    height: size,
    placeSelf: position,
  }

  return (
    <div style={containerStyles}>
      <Spinner style={spinnerStyles} animation={animation} />
    </div>
  )
}
