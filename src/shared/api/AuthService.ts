import { AxiosResponse } from 'axios'

import { AuthResponse } from '@/types/type'

import { urlLogin, urlLogout, urlRefresh, urlRegister } from '../consts/urls'
import { getCookieValue } from '../lib/cookie'
import { genRndHash } from '../lib/generate'
import { $api } from './api'

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

    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Factory-Application-Id': process.env.APP_ID,
      Authorization: `Basic ${basicToken}`,
    }
    const headersAdmin = {
      'Content-Type': 'application/json',
      Authorization: `Basic ${basicTokenAdmin}`,
    }

    return $api.post<AuthResponse>(
      urlLogin,
      { username: email, password },
      { headers: isAdmin ? headersAdmin : headers },
    )
  }

  static async registration(
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Factory-Application-Id': process.env.APP_ID,
    }
    return $api.post<AuthResponse>(
      urlRegister,
      { username: email, password },
      { headers },
    )
  }

  static async logout(): Promise<void> {
    const headers = {
      'X-Api-Factory-Application-Id': process.env.APP_ID,
      Authorization: `Bearer ${getCookieValue('accessToken')}`,
    }
    return $api.post(urlLogout, { headers })
  }

  static async refreshToken(): Promise<AxiosResponse<AuthResponse>> {
    const headers = {
      'Content-Type': 'application/json',
      'X-Api-Factory-Application-Id': process.env.APP_ID,
      Authorization: `Basic ${getCookieValue('basicToken')}`,
    }
    return $api.post(
      urlRefresh,
      { refresh_token: getCookieValue('refreshToken') },
      { headers },
    )
  }
}
