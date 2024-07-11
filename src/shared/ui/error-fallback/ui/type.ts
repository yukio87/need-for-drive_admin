import { AxiosError } from 'axios'

export interface ErrorFallbackProps {
  error: AxiosError
  resetErrorBoundary: () => void
}
