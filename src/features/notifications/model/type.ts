export interface Notification {
  id: number
  content: string
}

export interface InitialState {
  notifications: Notification[]
}
