import { routesPaths } from '@/shared/consts/routesPaths'

const { pathCarList, pathCarSettings } = routesPaths

export const navList = [
  {
    navIconName: 'IconBlog',
    navText: 'Заказы',
    navPath: '/',
  },
  {
    navIconName: 'IconBlogPosts',
    navText: 'Список авто',
    navPath: pathCarList,
  },
  {
    navIconName: 'IconAddPosts',
    navText: 'Карточка автомобиля',
    navPath: pathCarSettings,
  },
]
