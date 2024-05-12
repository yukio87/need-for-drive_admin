import Spinner from 'react-bootstrap/Spinner'

import { colorGrey } from '@/shared/consts/colors'

import { LoaderProps } from '../types/types'

export function Loader({
  size,
  animation,
  position = 'center',
  color = colorGrey,
}: LoaderProps) {
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
