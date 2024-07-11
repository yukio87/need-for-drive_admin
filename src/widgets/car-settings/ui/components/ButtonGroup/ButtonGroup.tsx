import { FC } from 'react'

import { defaultValues } from '@/pages/create-edit-car-page'
import { Button } from '@/shared/ui/button'

import styles from './ButtonGroup.module.scss'
import { ButtonGroupProps } from './type'

const { 'button-group': buttonGroup } = styles

export const ButtonGroup: FC<ButtonGroupProps> = ({
  isEditSession,
  deleteCar,
  reset,
}) => {
  const handleReset = () => reset(defaultValues)
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
