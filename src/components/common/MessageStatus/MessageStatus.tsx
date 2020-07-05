import React from 'react'

import HasBeenReadSvg from '../../../assets/icons/readed.svg'
import HasNotBeenReadSvg from '../../../assets/icons/send.svg'

type Props = {
  isMe?: boolean
  hasRead?: boolean
}

const MessageStatus: React.FC<Props> = ({ isMe, hasRead }) => {
  return (
    <>
      {isMe && hasRead ? (
        <img className="read" src={HasBeenReadSvg} alt="Has been read svg icon" />
      ) : (
        isMe && <img className="read" src={HasNotBeenReadSvg} alt="Has not been read svg icon" />
      )}
    </>
  )
}

export default MessageStatus
