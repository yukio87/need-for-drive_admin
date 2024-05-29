import { Headers } from '../type'

export const headers: Headers = {
  'Content-Type': 'application/json',
  'X-Api-Factory-Application-Id': process.env.APP_ID,
}
