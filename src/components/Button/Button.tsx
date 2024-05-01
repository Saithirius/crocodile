import React from 'react'
import style from './Button.module.scss'
import classNames from 'classnames'

type Props = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  loading?: boolean
  type?: 'default' | 'ghost' | 'text'
  htmlType?: Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
}

const Button: React.FC<Props> = ({ children, ...props }) => {
  let typeClass = style.default
  switch (props.type) {
    case 'ghost':
      typeClass = style.ghost
      break
    case 'text':
      typeClass = style.text
      break
  }

  return <button className={classNames([style.btn, typeClass])}>{children}</button>
}

export default Button
