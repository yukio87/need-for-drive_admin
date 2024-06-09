import { ErrorBoundary } from 'react-error-boundary'
import { Outlet, useNavigate } from 'react-router-dom'

import { ErrorFallback } from '@/shared/ui/error-fallback'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

import styles from './AppLayout.module.scss'

const { 'app-layout': appLayout, main } = styles

export const AppLayout = () => {
  const navigate = useNavigate()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate(-1)}
    >
      <div className={appLayout}>
        <Sidebar />
        <Header />
        <main className={main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}
