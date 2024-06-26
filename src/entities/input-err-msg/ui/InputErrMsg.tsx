import { FC } from 'react'

import styles from './InputErrMsg.module.scss'
import { InputErrMsgProps } from './type'

const { msg } = styles

export const InputErrMsg: FC<InputErrMsgProps> = ({ errMsg }) => {
  return <span className={msg}>{errMsg}</span>
}
