import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import cn from 'classnames'

import './Message.scss'
import HasBeenReadSvg from '../../../assets/icons/readed.svg'
import HasNotBeenReadSvg from '../../../assets/icons/send.svg'

import { TUser, TMessageAttachments } from '../../../types/types'

type Props = {
  avatar: string
  user: TUser
  text: string
  date: string
  isMe?: boolean
  isRead?: boolean
  attachments?: TMessageAttachments
}

const Message: React.FC<Props> = ({ avatar, user, text, date, isMe, isRead, attachments }) => {
  return (
    <div className={cn('message', { me: isMe })}>
      <div className="message__avatar">
        <img src={avatar} alt={`${user.fullname} avatar`} />
      </div>
      <div className="message__content">
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
          {isMe && isRead ? (
            <img className="read" src={HasBeenReadSvg} alt="Has been read svg icon" />
          ) : (
            isMe && (
              <img className="read" src={HasNotBeenReadSvg} alt="Has not been read svg icon" />
            )
          )}
        </div>
        <span className="message__date">
          {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </span>
      </div>
    </div>
  )
}

export default Message
