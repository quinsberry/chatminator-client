import React from 'react'

import { generateAvatarFromHash } from '@utils/helpers'

import './Avatar.scss'

import { TUser } from 'types/types'

type Props = {
  user: TUser
}

const Avatar: React.FC<Props> = ({ user }) => {
  const firstLetter = user.name[0].toUpperCase()
  const { color, colorLighten } = generateAvatarFromHash(user._id)
  return (
    <>
      {user.avatar ? (
        <img className="avatar" src={user.avatar} alt={`${user.name} avatar`} />
      ) : (
        <div
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
          }}
          className="avatar avatar-empty">
          <span>{firstLetter}</span>
        </div>
      )}
    </>
  )
}

export default Avatar
