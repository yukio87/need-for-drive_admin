import { FC } from 'react'

import IconEye from '../assets/icons/eye.svg'
import IconEyeSlash from '../assets/icons/eye-slash.svg'
import IconLogo from '../assets/icons/logo.svg'
import { IconProps, Icons } from './type'

export const Icon: FC<IconProps> = ({ name, styles }) => {
  const icons: Icons = {
    iconArrow: <IconLogo {...styles} />,
    IconEye: <IconEye {...styles} />,
    IconEyeSlash: <IconEyeSlash {...styles} />,
  }

  return icons[name]
}
