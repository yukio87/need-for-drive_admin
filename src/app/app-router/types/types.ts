import { ReactNode } from 'react'

export interface ProtectedRouteProps {
  isAllowed: boolean
  children: ReactNode
}
