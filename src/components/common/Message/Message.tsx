import React from 'react'

import './Message.scss'

import { TUser } from '../../../types/types'

type Props = {
  avatar: string
  user: TUser
  text: string
  date: string
}

const Message: React.FC<Props> = ({ avatar, user, text, date }) => {
  return (
    <div className="message">
      <div className="message__avatar">
        <img src={avatar} alt={`${user.fullname} avatar`} />
      </div>
      <div className="message__content">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">Yesterday, at 3pm</span>
      </div>
    </div>
  )
}

export default Message
