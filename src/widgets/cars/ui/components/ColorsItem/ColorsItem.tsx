import { FC } from 'react'

import { ColorsItemProps } from './type'

export const ColorsItem: FC<ColorsItemProps> = ({ item, index, array }) => {
  const color = item.toLowerCase()
  const isLatsItem = index === array.length - 1
  const isFirstItem = index === 0
  const isSingleItem = array.length === 1

  if (isFirstItem)
    return (
      <span>{`${color[0].toUpperCase() + color.slice(1)}${
        isSingleItem ? '' : ', '
      }`}</span>
    )
  if (isLatsItem) return <span>{color}</span>

  return <span>{`${color}, `}</span>
}
