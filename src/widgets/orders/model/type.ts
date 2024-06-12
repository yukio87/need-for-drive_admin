export interface InitialState {
  selectedCar: string[]
  selectedCity: string[]
}

export interface Payload {
  pointName: 'selectedCar' | 'selectedCity'
  selected: string[]
}
