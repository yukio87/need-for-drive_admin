import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'

import { baseURL } from '@/shared/consts/urls'
import {
  getCookieValue,
  removeCookieValue,
  saveCookieValue,
} from '@/shared/lib/cookie'

import AuthService from './AuthService'
import { CustomAxiosRequestConfig } from './type'

export const $api = axios.create({
  baseURL,
})

$api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomAxiosRequestConfig
    const refreshToken = getCookieValue('refreshToken')

    if (
      error.response.status === 401 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      try {
        const response = await AuthService.refreshToken()
        saveCookieValue('accessToken', response.data.access_token)
        saveCookieValue('refreshToken', response.data.refresh_token)
        $api.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`
        return $api(originalRequest)
      } catch (refreshError) {
        removeCookieValue('accessToken')
        removeCookieValue('refreshToken')
        removeCookieValue('basicToken')
        window.location.href = '/'
        toast.error('Что-то пошло не так...')
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)
