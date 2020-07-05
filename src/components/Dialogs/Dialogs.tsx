import React from 'react'
import orderBy from 'lodash/orderBy'

import { DialogItem } from '../common/'

import './Dialogs.scss'

import { TLastMessage } from '../../types/types'

type Props = {
  items: Array<TLastMessage>
  userId: string
}

const Dialogs: React.FC<Props> = ({ items, userId }) => {
  return (
    <div className="dialogs">
      {orderBy(items, ['created_at'], ['desc']).map((item) => (
        <DialogItem key={item._id} message={item} isMe={item.user._id === userId} />
      ))}
    </div>
  )
}

export default Dialogs
