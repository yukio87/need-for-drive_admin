import { Loader } from '@/shared/ui/loader'

import styles from './ModalLoader.module.scss'

const { 'modal-loader': modalLoader } = styles

export const ModalLoader = () => {
  return (
    <div className={modalLoader}>
      <Loader size="45px" animation="grow" />
    </div>
  )
}
