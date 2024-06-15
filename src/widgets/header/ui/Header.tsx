import { useState } from 'react'

import { Notifications } from '@/features/notifications'
import { UserMenu } from '@/features/user-menu'
import { Input } from '@/shared/ui/input'

import styles from './Header.module.scss'

const { header } = styles

export const Header = () => {
  const [inputVal, setInputVal] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  return (
    <header className={header}>
      <Input
        size="big"
        placeholder="Поиск..."
        value={inputVal}
        onChange={handleInput}
      />
      <Notifications />
      <UserMenu />
    </header>
  )
}
