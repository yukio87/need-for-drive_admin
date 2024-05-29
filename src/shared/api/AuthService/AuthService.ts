import { AxiosResponse } from 'axios'

import { AuthResponse } from '@/types/type'

import { urlLogin, urlLogout, urlRefresh, urlRegister } from '../../consts/urls'
import { getCookieValue } from '../../lib/cookie'
import { genRndHash } from '../../lib/generate'
import { $api } from '../api'
import { headers } from './consts/headers'

export default class AuthService {
  static async login(
    email: string,
    password: string,
    isAdmin: boolean,
    setBasicToken: (value: string) => void,
  ): Promise<AxiosResponse<AuthResponse>> {
    const basicToken = btoa(`${genRndHash()}:${process.env.APP_SECRET}`)
    const basicTokenAdmin = btoa(`${genRndHash()}:${genRndHash()}`)

    setBasicToken(isAdmin ? basicTokenAdmin : basicToken)

    headers.Authorization = isAdmin
      ? `Basic ${basicTokenAdmin}`
      : `Basic ${basicToken}`

    return $api.post<AuthResponse>(
      urlLogin,
      { username: email, password },
      { headers },
    )
  }

  static async registration(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>(
      urlRegister,
      { username: email, password },
      { headers },
    )
  }

  static async logout(): Promise<void> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.post(urlLogout, { headers })
  }

  static async refreshToken(): Promise<AxiosResponse<AuthResponse>> {
    headers.Authorization = `Basic ${getCookieValue('basicToken')}`
    return $api.post(
      urlRefresh,
      { refresh_token: getCookieValue('refreshToken') },
      { headers },
    )
  }

  // Временно для проверки
  static async getOrders(): Promise<AxiosResponse<AuthResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.get('/db/order', { headers })
  }
}
