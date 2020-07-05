import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import cn from 'classnames'

import MessageStatus from '../MessageStatus/MessageStatus'

import './Message.scss'
import HasBeenReadSvg from '../../../assets/icons/readed.svg'
import HasNotBeenReadSvg from '../../../assets/icons/send.svg'

import { TMessage } from '../../../types/types'

type Props = TMessage

const Message: React.FC<Props> = ({
  avatar,
  user,
  text,
  date,
  isMe,
  hasRead,
  attachments,
  isTyping,
}) => {
  return (
    <div
      className={cn('message', { me: isMe, typing: isTyping, image: attachments?.length === 1 })}>
      <div className="message__avatar">
        <img src={avatar} alt={`${user.name} avatar`} />
      </div>
      <div className="message__content">
        <div className="message__info">
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
          )}
          <div className="message__attachments">
            {attachments &&
              attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
          </div>
          <MessageStatus isMe={isMe} hasRead={hasRead} />
        </div>
        {date && (
          <span className="message__date">
            {formatDistanceToNow(new Date(date), { addSuffix: true })}
          </span>
        )}
      </div>
    </div>
  )
}

export default Message
