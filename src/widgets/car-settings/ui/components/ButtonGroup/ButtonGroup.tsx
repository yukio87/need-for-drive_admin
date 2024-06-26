import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/ui/button'

import styles from './ButtonGroup.module.scss'

const { 'button-group': buttonGroup } = styles

export const ButtonGroup = () => {
  const navigate = useNavigate()

  const handleReset = () => navigate(-1)

  const handleDelete = () => {
    // console.log('click on delete button')
  }

  return (
    <div className={buttonGroup}>
      <Button type="submit">Сохранить</Button>
      <Button onClick={handleReset} variations="secondary">
        Отменить
      </Button>
      <Button onClick={handleDelete} variations="danger">
        Удалить
      </Button>
    </div>
  )
}
