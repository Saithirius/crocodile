import React from 'react'
import style from './Button.module.scss'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
}

const Button: React.FC<Props> = ({ children }) => {
  return <button className={style.btn}>{children}</button>
}

export default Button
