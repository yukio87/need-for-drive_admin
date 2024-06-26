import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import AuthService from '@/shared/api/AuthService/AuthService'
import { CARS_PER_PAGE } from '@/shared/consts/perPage'
import { Loader } from '@/shared/ui/loader'
import { Pagination } from '@/shared/ui/pagination'

import { setParams } from '../model/paramsSlice/paramsSlice'
import { selectAllParams } from '../model/selectors/selectors'
import styles from './Cars.module.scss'
import { CarRow, Dropdown, FilterButtonGroup } from './components'

const { title, 'cars-container': carsContainer, header, main, footer } = styles

export const Cars = () => {
  const [selectedSortedBy, setSelectedSortedBy] = useState('')
  const params = useSelector(selectAllParams)

  const { isLoading, data } = useQuery({
    queryKey: ['cars', params],
    queryFn: () => AuthService.getCars(params),
    throwOnError: true,
  })

  const cars = data?.data.data
  const pagesAmount = Math.ceil(data ? data.data.count / CARS_PER_PAGE : 0)

  if (isLoading) return <Loader size="45px" animation="grow" />

  return (
    <>
      <h1 className={title}>Автомобили</h1>
      <div className={carsContainer}>
        <header className={header}>
          <Dropdown
            selectedSortedBy={selectedSortedBy}
            setSelectedSortedBy={setSelectedSortedBy}
          />
          <FilterButtonGroup setSelectedSortedBy={setSelectedSortedBy} />
        </header>
        <main className={main}>
          {cars.map((item) => (
            <CarRow car={item} key={item.id} />
          ))}
        </main>

        <footer className={footer}>
          <Pagination
            pagesAmount={pagesAmount}
            params={params}
            actionCreator={setParams}
          />
        </footer>
      </div>
    </>
  )
}
