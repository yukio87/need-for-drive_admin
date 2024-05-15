import { Toaster } from 'react-hot-toast'

import { colorTextPrimary } from '@/shared/consts/colors'

export const ToastsProvider = () => {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 3000,
        },
        style: {
          fontSize: '14px',
          maxWidth: '500px',
          padding: '16px 24px',
          backgroundColor: 'white',
          color: colorTextPrimary,
        },
      }}
    />
  )
}
