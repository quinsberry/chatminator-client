import React from 'react'
import cn from 'classnames'

import { Button as BaseButton } from 'antd'

import './Button.scss'

type Props = {
  className?: string
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined
  size?: 'large' | 'middle' | 'small'
  htmlType?: 'button' | 'submit' | 'reset' | undefined
<<<<<<< HEAD
  onClick?: () => void
=======
>>>>>>> Before eject
}

const Button: React.FC<Props> = (props) => {
  return (
    <BaseButton
      {...props}
      className={cn('button', props.className, { 'button-large': props.size === 'large' })}
    />
  )
}

export default Button
