export interface InitialState {
  [key: string]: string
}

export interface Payload {
  pointName: 'name' | 'priceMin'
  value: string
}
