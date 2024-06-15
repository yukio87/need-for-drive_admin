import moment from 'moment'

export const formatDate = (timestampString: string) => {
  const timestampNumeric = Number(timestampString)
  return moment(timestampNumeric).format('DD.MM.YYYY HH:mm')
}

export const getNumberWithSpaces = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
