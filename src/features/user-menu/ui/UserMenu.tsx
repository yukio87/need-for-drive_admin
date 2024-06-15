import { useMutation } from '@tanstack/react-query'
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from 'react-router-dom'

import AuthService from '@/shared/api/AuthService/AuthService'
import { routesPaths } from '@/shared/consts/routesPaths'
import { Icon } from '@/shared/ui/icon'
import { ModalLoader } from '@/shared/ui/modal-loader'

import userAvatar from '../assets/images/user-avatar.png'
import { iconBasicStyles } from '../consts/styles'
import styles from './UserMenu.module.scss'

const {
  box,
  'icon-wrapper': iconWrapper,
  'img-wrapper': imgWrapper,
  username,
  'dropdown-container': dropdownContainer,
} = styles

export const UserMenu = () => {
  const navigate = useNavigate()

  const { isPending, mutate } = useMutation({
    mutationFn: () => AuthService.logout(),
    onSuccess: () => navigate(pathLogin),
  })

  const { pathLogin } = routesPaths

  return (
    <>
      {isPending && <ModalLoader />}
      <div className={dropdownContainer}>
        <Dropdown>
          <Dropdown.Toggle>
            <div className={box}>
              <div className={imgWrapper}>
                <img src={userAvatar} alt="user-avatar" />
              </div>
              <div className={username}>Admin</div>
              <div className={iconWrapper}>
                <Icon name="IconDropdown" styles={iconBasicStyles} />
              </div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => mutate()}>Выйти</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}
