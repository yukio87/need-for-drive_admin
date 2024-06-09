import { Orders } from '@/widgets/orders'

import styles from './OrderListPage.module.scss'

const { title } = styles

export const OrderListPage = () => {
  return (
    <>
      <h1 className={title}>Заказы</h1>
      <Orders />
    </>
  )
}
