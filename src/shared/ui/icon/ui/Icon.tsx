import IconEye from '../assets/icons/eye.svg'
import IconEyeSlash from '../assets/icons/eye-slash.svg'
import IconLogo from '../assets/icons/logo.svg'
import { IconProps, Icons } from '../types/types'

export function Icon({ name, styles }: IconProps) {
  const icons: Icons = {
    iconArrow: <IconLogo {...styles} />,
    IconEye: <IconEye {...styles} />,
    IconEyeSlash: <IconEyeSlash {...styles} />,
  }

  return icons[name]
}
