import { useState } from 'react'

import { Notifications } from '@/features/notifications'
import { UserMenu } from '@/features/user-menu'

import { Input } from '../components'
import styles from './Header.module.scss'

const { header } = styles

export const Header = () => {
  const [inputVal, setInputVal] = useState('')

  return (
    <header className={header}>
      <Input value={inputVal} setValue={setInputVal} />
      <Notifications />
      <UserMenu />
    </header>
  )
}
