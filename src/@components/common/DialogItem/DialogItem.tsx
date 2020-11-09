import React from 'react'
import cn from 'classnames'
import { format, isToday } from 'date-fns'

import { Time, MessageStatus, Avatar } from '../'

import './DialogItem.scss'

import { TLastMessage } from 'types/types'

type Props = {
  message: TLastMessage
  isMe: boolean
}

const DialogItem: React.FC<Props> = ({ message, isMe }) => {
  const { created_at, text, hasRead, unread, user } = message

  const getMessageTime = (time: Date) => {
    if (isToday(time)) {
      return format(time, 'HH:mm')
    }
    return format(time, 'MM.dd.yyyy')
  }

  return (
    <div className={cn('dialogs__item', { online: user.isOnline })}>
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.name}</b>
          <Time date={getMessageTime(created_at)} dialogItem />
          {/* <span>{getMessageTime(message.created_at)}</span> */}
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{text}</p>
          {isMe ? (
            <MessageStatus isMe={true} hasRead={hasRead} />
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
