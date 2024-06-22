import { useQuery } from '@tanstack/react-query'
import { Typeahead } from 'react-bootstrap-typeahead'
import { useDispatch, useSelector } from 'react-redux'

import AuthService from '@/shared/api/AuthService/AuthService'
import { Icon } from '@/shared/ui/icon'
import { Loader } from '@/shared/ui/loader'

import { iconStyles } from '../../../consts/styles'
import {
  getSelected,
  setSelectedPoint,
} from '../../../model/filterSlice/filterSlice'
import { SelectedCar, SelectedCity } from '../../type'
import { carsParams } from './consts/carsParams'
import styles from './InputGroup.module.scss'

const { 'typehead-group': typeheadGroup, 'icon-wrapper': iconWrapper } = styles

export const InputGroup = () => {
  const dispatch = useDispatch()
  const { selectedCar, selectedCity } = useSelector(getSelected)

  const { isLoading: isLoadingCars, data: cars } = useQuery({
    queryKey: ['cars'],
    queryFn: () => AuthService.getCars(carsParams),
    select: (res) => res.data.data,
    throwOnError: true,
  })

  const { isLoading: isLoadingCities, data: cities } = useQuery({
    queryKey: ['cities'],
    queryFn: () => AuthService.getCities(),
    select: (res) => res.data.data,
    throwOnError: true,
  })

  const handleChangeCar = (s: SelectedCar[]) =>
    dispatch(
      setSelectedPoint({
        pointName: 'selectedCar',
        selected: s,
      }),
    )

  const handleChangeCity = (s: SelectedCity[]) =>
    dispatch(
      setSelectedPoint({
        pointName: 'selectedCity',
        selected: s,
      }),
    )

  return (
    <div className={typeheadGroup}>
      <Typeahead
        id="input-car"
        onChange={handleChangeCar}
        options={cars || []}
        labelKey="name"
        placeholder="Автомобиль"
        emptyLabel={
          isLoadingCars ? (
            <Loader size="20px" animation="border" />
          ) : (
            'Совпадений не найдено'
          )
        }
        selected={selectedCar}
      >
        <div className={iconWrapper}>
          <Icon name="IconDropdown1" styles={iconStyles} />
        </div>
      </Typeahead>

      <Typeahead
        id="input-city"
        onChange={handleChangeCity}
        options={cities || []}
        labelKey="name"
        placeholder="Город"
        emptyLabel={
          isLoadingCities ? (
            <Loader size="20px" animation="border" />
          ) : (
            'Совпадений не найдено'
          )
        }
        selected={selectedCity}
      >
        <div className={iconWrapper}>
          <Icon name="IconDropdown1" styles={iconStyles} />
        </div>
      </Typeahead>
    </div>
  )
}
