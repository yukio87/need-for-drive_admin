import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { removeCookieValue } from '@/shared/lib/cookie'
import { Loader } from '@/shared/ui/loader'
import { setUserRoles } from '@/widgets/login/model/slice'

export const CarSettingsPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isPending, mutate } = useMutation({
    mutationFn: () => AuthService.logout(),
    onSuccess: () => {
      removeCookieValue('accessToken')
      removeCookieValue('refreshToken')
      removeCookieValue('basicToken')
      dispatch(setUserRoles([]))
      navigate(pathLogin)
    },
    onError: () => toast.error('Не удалось выйти из учетной записи...'),
  })

  const { pathLogin } = routesPaths

  if (isPending)
    return (
      <div style={{ height: '100vh' }}>
        <Loader size="60px" animation="grow" />
      </div>
    )

  return (
    <>
      <div>CarSettingsPage</div>
      <button type="button" onClick={() => mutate()}>
        Logout
      </button>
    </>
  )
}
