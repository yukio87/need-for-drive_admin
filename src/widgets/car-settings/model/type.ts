export interface InitialState {
  colors: string[]
  modelIsValid: boolean
  categoryIsValid: boolean
  colorIsValid: boolean
}

export interface Payload {
  pointName: 'modelIsValid' | 'categoryIsValid' | 'colorIsValid'
  value: boolean
}
