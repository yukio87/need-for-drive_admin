import { routesPaths } from '@/shared/consts/routesPaths'

const { pathTable, pathCarSettings } = routesPaths

export const navList = [
  {
    navIconName: 'IconBlog',
    navText: 'Заказы',
    navPath: '/',
  },
  {
    navIconName: 'IconBlogPosts',
    navText: 'Список авто',
    navPath: pathTable,
  },
  {
    navIconName: 'IconAddPosts',
    navText: 'Карточка автомобиля',
    navPath: pathCarSettings,
  },
]
