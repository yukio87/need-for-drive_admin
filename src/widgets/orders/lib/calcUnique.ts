import { Order } from '@/types/type'

import { keyType } from './type'

export const calcUnique = (orders: Order[], key: keyType) => {
  return orders.reduce((acc: string[], item) => {
    if (!acc.includes(item[key]?.name) && item[key]?.name)
      acc.push(item[key].name)
    return acc
  }, [])
}
