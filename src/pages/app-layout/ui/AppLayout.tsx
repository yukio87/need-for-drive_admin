import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'

import { ErrorFallback } from '@/shared/ui/error-fallback'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

import styles from './AppLayout.module.scss'

const { 'app-layout': appLayout, main } = styles

export const AppLayout = () => {
  return (
    <div className={appLayout}>
      <Sidebar />
      <Header />
      <main className={main}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
              <Outlet />
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </main>
      <Footer />
    </div>
  )
}
