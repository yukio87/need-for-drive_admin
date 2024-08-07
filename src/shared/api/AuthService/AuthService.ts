import { AxiosError, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

import {
  AuthResponse,
  CarRequestBody,
  MutateCarResponse,
  OrdersParams,
} from '@/types/type'

import {
  urlCar,
  urlCategory,
  urlCity,
  urlLogin,
  urlLogout,
  urlOrder,
  urlRefresh,
  urlRegister,
} from '../../consts/urls'
import {
  getCookieValue,
  removeCookieValue,
  saveCookieValue,
} from '../../lib/cookie'
import { genRndHash } from '../../lib/generate'
import { $api } from '../api'
import { headers } from './consts/headers'
import {
  CarResponse,
  CarsParams,
  CarsResponse,
  CategoriesResponse,
  CitiesResponse,
  ErrorResponse,
  OrdersResponse,
} from './type'

export default class AuthService {
  static async login(
    email: string,
    password: string,
    isAdmin: boolean,
  ): Promise<AxiosResponse<AuthResponse>> {
    const basicToken = btoa(`${genRndHash()}:${process.env.APP_SECRET}`)
    const basicTokenAdmin = btoa(`${genRndHash()}:${genRndHash()}`)

    headers.Authorization = isAdmin
      ? `Basic ${basicTokenAdmin}`
      : `Basic ${basicToken}`

    try {
      const data = await $api.post<AuthResponse>(
        urlLogin,
        { username: email, password },
        { headers },
      )
      saveCookieValue('basicToken', basicToken)
      saveCookieValue('accessToken', data.data.access_token)
      saveCookieValue('refreshToken', data.data.refresh_token)
      $api.defaults.headers.common.Authorization = `Bearer ${data.data.access_token}`
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        const errorResponse = err.response.data as ErrorResponse
        if (errorResponse.status === 401) {
          toast.error('Пользователь не найден...')
          throw err
        } else {
          toast.error('Повторите попытку позже...')
          throw err
        }
      }
    }

    return null
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

    try {
      await $api.post(urlLogout, { headers })
      removeCookieValue('basicToken')
      removeCookieValue('accessToken')
      removeCookieValue('refreshToken')
    } catch (err: unknown) {
      toast.error('Не удалось выйти из учетной записи...')
      throw err
    }

    return null
  }

  static async refreshToken(): Promise<AxiosResponse<AuthResponse>> {
    headers.Authorization = `Basic ${getCookieValue('basicToken')}`
    return $api.post(
      urlRefresh,
      { refresh_token: getCookieValue('refreshToken') },
      { headers },
    )
  }

  static async getOrders(
    params: OrdersParams,
  ): Promise<AxiosResponse<OrdersResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.get(urlOrder, { headers, params })
  }

  static async getCities(): Promise<AxiosResponse<CitiesResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.get(urlCity, { headers })
  }

  static async getCars(
    params: CarsParams,
  ): Promise<AxiosResponse<CarsResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.get(urlCar, { headers, params })
  }

  static async getCar(id: string): Promise<AxiosResponse<CarResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.get(`${urlCar}/${id}`, { headers })
  }

  static async editCar(
    id: string,
    body: CarRequestBody,
  ): Promise<AxiosResponse<MutateCarResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.put(`${urlCar}/${id}`, body, { headers })
  }

  static async deleteCar(
    id: string,
  ): Promise<AxiosResponse<MutateCarResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.delete(`${urlCar}/${id}`, { headers })
  }

  static async createCar(
    body: CarRequestBody,
  ): Promise<AxiosResponse<MutateCarResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.post(urlCar, body, { headers })
  }

  static async getCategories(): Promise<AxiosResponse<CategoriesResponse>> {
    headers.Authorization = `Bearer ${getCookieValue('accessToken')}`
    return $api.get(urlCategory, { headers })
  }
}
