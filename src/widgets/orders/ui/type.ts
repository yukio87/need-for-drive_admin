export interface SelectedCar {
  categoryId: CategoryId
  colors: string[]
  createdAt: string
  description: string
  id: number
  name: string
  number: string
  priceMax: number
  priceMin: number
  tank: string
  thumbnail: Thumbnail
  updatedAt: string
}

export interface SelectedCity {
  createdAt: string
  id: number
  name: string
  updatedAt: string
}

interface CategoryId {
  createdAt: string
  description: string
  id: number
  name: string
  updatedAt: string
}

interface Thumbnail {
  path: string
  size: number
}
