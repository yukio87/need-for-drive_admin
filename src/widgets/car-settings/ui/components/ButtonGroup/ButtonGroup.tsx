import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/ui/button'

import styles from './ButtonGroup.module.scss'
import { ButtonGroupProps } from './type'

const { 'button-group': buttonGroup } = styles

export const ButtonGroup: FC<ButtonGroupProps> = ({
  isEditSession,
  deleteCar,
}) => {
  const navigate = useNavigate()

  const handleReset = () => navigate(-1)
  const handleDelete = () => deleteCar()

  return (
    <div className={buttonGroup}>
      <Button type="submit">{isEditSession ? 'Сохранить' : 'Создать'}</Button>
      <Button onClick={handleReset} variations="secondary">
        Отменить
      </Button>
      {isEditSession && (
        <Button onClick={handleDelete} variations="danger">
          Удалить
        </Button>
      )}
    </div>
  )
}
