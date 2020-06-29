import React from 'react'
import cn from 'classnames'

import './Block.scss'

type Props = {
  children: React.ReactNode
  className?: string
}

const Block: React.FC<Props> = ({ children, className }) => {
  return <div className={cn('block', className)}>{children}</div>
}

export default Block
