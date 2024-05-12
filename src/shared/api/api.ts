import axios from 'axios'

import { baseURL } from '@/shared/consts/urls'

import { RequestOptions } from './types/types'

export async function api(url: string, options: RequestOptions) {
  try {
    const res = await axios({
      baseURL,
      url,
      params: options.params,
      method: options.method,
      data: options.data,
    })

    return res
  } catch (err) {
    throw new Error('Не удалось получить данные...')
  }
}
