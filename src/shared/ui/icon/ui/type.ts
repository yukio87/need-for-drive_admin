import { ReactElement } from 'react'

export interface Styles {
  [key: string]: string
}

export interface IconProps {
  name: string
  styles: Styles
}

export interface Icons {
  [key: string]: ReactElement
}
