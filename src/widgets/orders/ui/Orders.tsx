import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import AuthService from '@/shared/api/AuthService/AuthService'
import { PER_PAGE } from '@/shared/consts/perPage'
import { Loader } from '@/shared/ui/loader'
import { Pagination } from '@/widgets/pagination'

import { FilterButtonGroup, InputGroup, OrderRow } from './components'
import styles from './Orders.module.scss'

const {
  title,
  'orders-container': ordersContainer,
  header,
  main,
  footer,
} = styles

export const Orders = () => {
  const [activePage, setActivePage] = useState(1)

  const params = {
    limit: String(PER_PAGE),
    page: String(activePage),
  }

  const { isLoading, data } = useQuery({
    queryKey: ['orders', activePage],
    queryFn: () => AuthService.getOrders(params),
    throwOnError: true,
    staleTime: 10000,
  })

  const orders = data?.data.data
  const pagesAmount = Math.ceil(data ? data.data.count / PER_PAGE : 0)

  if (isLoading) return <Loader size="45px" animation="grow" />

  return (
    <>
      <h1 className={title}>Заказы</h1>
      <div className={ordersContainer}>
        <header className={header}>
          <InputGroup />
          <FilterButtonGroup />
        </header>

        <main className={main}>
          {orders.map((item) => (
            <OrderRow order={item} key={item.id} />
          ))}
        </main>

        <footer className={footer}>
          <Pagination
            pagesAmount={pagesAmount}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </footer>
      </div>
    </>
  )
}
