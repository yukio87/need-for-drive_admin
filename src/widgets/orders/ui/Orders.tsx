import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Navigate } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { Button } from '@/shared/ui/button'
import { Icon } from '@/shared/ui/icon'
import { ModalLoader } from '@/shared/ui/modal-loader'

import { amountOrders } from '../consts/amountOrders'
import { periodList } from '../consts/list'
import { iconStyles } from '../consts/styles'
import { calcUnique } from '../lib/calcUnique'
import { OrderRow } from './components/OrderRow'
import styles from './Orders.module.scss'
import { Period } from './type'

const {
  'orders-container': ordersContainer,
  header,
  'input-group': inputGroup,
  'icon-wrapper': iconWrapper,
  'button-group': buttonGroup,
  main,
  footer,
} = styles

export const Orders = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period[]>([])
  const [selectedCar, setSelectedCar] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])

  const {
    isLoading,
    data: orders,
    isError,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: () => AuthService.getOrders(),
    select: (response) => response.data.data,
  })

  const handleClickApply = () => {
    // console.log('click apply')
  }

  const handleClickReset = () => {
    setSelectedPeriod([])
    setSelectedCar([])
    setSelectedCity([])
    setSelectedStatus([])
  }

  const handleChangePeriod = (s: Period[]) => setSelectedPeriod(s)
  const handleChangeCar = (s: string[]) => setSelectedCar(s)
  const handleChangeCity = (s: string[]) => setSelectedCity(s)
  const handleChangeStatus = (s: string[]) => setSelectedStatus(s)

  const { pathLogin } = routesPaths
  const hasFilter =
    !!selectedPeriod.length ||
    !!selectedCar.length ||
    !!selectedCity.length ||
    !!selectedStatus.length

  if (isLoading) return <ModalLoader />

  if (isError) return <Navigate to={pathLogin} />

  return (
    <div className={ordersContainer}>
      <header className={header}>
        <div className={inputGroup}>
          <Typeahead
            id="input-period"
            onChange={handleChangePeriod}
            options={periodList}
            labelKey="name"
            placeholder="Период"
            emptyLabel="Совпадений не найдено"
            selected={selectedPeriod}
          >
            <div className={iconWrapper}>
              <Icon name="IconDropdown1" styles={iconStyles} />
            </div>
          </Typeahead>

          <Typeahead
            id="input-car"
            onChange={handleChangeCar}
            options={calcUnique(orders, 'carId')}
            placeholder="Автомобиль"
            emptyLabel="Совпадений не найдено"
            selected={selectedCar}
          >
            <div className={iconWrapper}>
              <Icon name="IconDropdown1" styles={iconStyles} />
            </div>
          </Typeahead>

          <Typeahead
            id="input-city"
            onChange={handleChangeCity}
            options={calcUnique(orders, 'cityId')}
            placeholder="Город"
            emptyLabel="Совпадений не найдено"
            selected={selectedCity}
          >
            <div className={iconWrapper}>
              <Icon name="IconDropdown1" styles={iconStyles} />
            </div>
          </Typeahead>

          <Typeahead
            id="input-status"
            onChange={handleChangeStatus}
            options={calcUnique(orders, 'orderStatusId')}
            placeholder="Статус"
            emptyLabel="Совпадений не найдено"
            selected={selectedStatus}
          >
            <div className={iconWrapper}>
              <Icon name="IconDropdown1" styles={iconStyles} />
            </div>
          </Typeahead>
        </div>
        <div className={buttonGroup}>
          {hasFilter && (
            <Button onClick={handleClickReset} variations="danger">
              Отменить
            </Button>
          )}
          <Button onClick={handleClickApply}>Применить</Button>
        </div>
      </header>

      <main className={main}>
        {orders.slice(0, amountOrders).map((item) => (
          <OrderRow order={item} key={item.id} />
        ))}
      </main>

      <footer className={footer}>
        <Pagination>
          <Pagination.First />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{8}</Pagination.Item>
          <Pagination.Item active>{9}</Pagination.Item>
          <Pagination.Item>{10}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </footer>
    </div>
  )
}
