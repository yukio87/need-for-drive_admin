import { CategoryId } from '@/types/type'

const dt = new DataTransfer()
const fileList = dt.files

export const defaultValues = {
  categoryId: [] as CategoryId[],
  colors: '',
  description: '',
  name: '',
  priceMax: '',
  priceMin: '',
  thumbnail: fileList,
}
