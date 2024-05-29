import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, useNavigate } from 'react-router-dom'

import { ErrorFallback } from '@/shared/ui/error-fallback'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

import { StyledAppLayout, StyledMain } from './components'

export const AppLayout = () => {
  const navigate = useNavigate()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate(-1)}
    >
      <StyledAppLayout>
        <Sidebar />
        <Header />
        <StyledMain>
          <Outlet />
        </StyledMain>
        <Footer />
      </StyledAppLayout>
    </ErrorBoundary>
  )
}
