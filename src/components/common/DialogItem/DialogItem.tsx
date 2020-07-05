import React from 'react'
import cn from 'classnames'

import { Time, MessageStatus } from '../'

import './DialogItem.scss'

type Props = {
  user: {
    avatar?: string
    name: string
    isOnline: boolean
  }
  message: {
    text: string
    hasRead?: boolean
    created_at: string
    isMe?: boolean
  }
  unread?: number
}

const DialogItem: React.FC<Props> = ({ user, message, unread }) => {
  const getMockAvatar = (username: string) => {
    return ''
  }

  return (
    <div className={cn('dialogs__item', { online: user.isOnline })}>
      <div className="dialogs__item-avatar">
        <img
          src={user.avatar ? user.avatar : getMockAvatar(user.name)}
          alt={`${user.name} avatar`}
        />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.name}</b>
          <Time date={message.created_at} dialogItem />
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{message.text}</p>
          {message.isMe ? (
            <MessageStatus isMe={true} hasRead={message.hasRead} />
          ) : (
            <div
              className={cn('unread-icon', {
                twoNum: unread! > 9 && unread! < 100,
                threeNum: unread! > 99 && unread! < 1000,
                fourNum: unread! > 999,
              })}>
              <span>{unread}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DialogItem
