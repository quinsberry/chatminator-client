import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

type Props = {
  date: Date | string
  className?: string
  dialogItem?: boolean
}

const Time: React.FC<Props> = ({ date, className, dialogItem }) => {
  return (
    <>
      {dialogItem ? (
        <span className={className}>
          {/* {new Date(date).toLocaleTimeString().replace(/(.*)\D\d+/, '$1')} */}
          {date}
        </span>
      ) : (
        <span className={className}>
          {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </span>
      )}
    </>
  )
}

export default Time
