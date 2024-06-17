import { SelectedCar, SelectedCity } from '../../ui/type'

export interface InitialState {
  selectedCar: SelectedCar[]
  selectedCity: SelectedCity[]
  selectedCarId: string
  selectedCityId: string
}

export interface Payload {
  pointName: 'selectedCar' | 'selectedCity'
  selected: SelectedCar[] | SelectedCity[]
}
