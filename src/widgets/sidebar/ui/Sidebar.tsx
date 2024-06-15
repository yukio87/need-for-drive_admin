import { Logo } from '@/entities/logo'

import { navList } from '../consts/navList'
import { ListItem } from './components'
import styles from './Sidebar.module.scss'

const { sidebar, 'logo-wrapper': logoWrapper, list } = styles

export const Sidebar = () => {
  return (
    <aside className={sidebar}>
      <div className={logoWrapper}>
        <Logo />
      </div>
      <div className={list}>
        {navList.map((item) => {
          return <ListItem item={item} key={item.navText} />
        })}
      </div>
    </aside>
  )
}
