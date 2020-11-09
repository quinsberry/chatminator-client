import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import cn from 'classnames'

import MessageStatus from '../MessageStatus/MessageStatus'
import { convertCurrentTime } from '@utils/helpers'

import './Message.scss'
import waveSvg from '@assets/icons/sound-wave.svg'
import playSvg from '@assets/icons/play.svg'
import pauseSvg from '@assets/icons/pause.svg'

import { TMessage } from 'types/types'

type Props = TMessage
type PropsAudio = {
  audio: string
}

const MessageAudio: React.FC<PropsAudio> = ({ audio }) => {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress, setProgress] = React.useState(0)
  const [currentTime, setCurrentTime] = React.useState(0)
  const audioRef = React.useRef<HTMLAudioElement>(null) as React.MutableRefObject<HTMLAudioElement>

  const onEvent = {
    loadedmetadata: () => setCurrentTime(audioRef.current.duration),
    playing: () => setIsPlaying(true),
    ended: () => {
      setIsPlaying(false)
      setProgress(0)
      setCurrentTime(audioRef.current.duration)
    },
    pause: () => setIsPlaying(false),
    timeupdate: () => {
      setCurrentTime(audioRef.current.currentTime)
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100)
    },
  }

  const neededEventListeners = (move: 'add' | 'remove') => {
    const eventsTypes = Object.keys(onEvent)
    const eventCallbacks = Object.values(onEvent)

    eventsTypes.forEach((event, idx) => {
      if (move === 'add') {
        audioRef.current.addEventListener(event, eventCallbacks[idx])
      } else {
        audioRef.current.removeEventListener(event, eventCallbacks[idx])
      }
    })
  }

  React.useEffect(() => {
    if (audioRef.current) {
      neededEventListeners('add')
    }
    return () => {
      neededEventListeners('remove')
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
      return
    }
    audioRef.current.play()
  }
  return (
    <div className="message__audio" onClick={togglePlay}>
      <audio ref={audioRef} src={audio} preload="metadata" />
      <div className="message__audio-progress" style={{ width: `${progress}%` }}></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button>
            {isPlaying ? <img src={pauseSvg} alt="Pause svg icon" /> : <img src={playSvg} alt="Play svg icon" />}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Sound wave icon" />
        </div>
        <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
      </div>
    </div>
  )
}

const Message: React.FC<Props> = ({ avatar, user, text, date, isMe, audio, hasRead, attachments, isTyping }) => {
  return (
    <div
      className={cn('message', {
        'message-me': isMe,
        'message-typing': isTyping,
        'message-audio': audio,
        'message-image': attachments?.length === 1,
      })}>
      <div className="message__avatar">
        <img src={avatar} alt={`${user.name} avatar`} />
      </div>
      <div className="message__content">
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
              {audio && <MessageAudio audio={audio} />}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item) => (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.filename} />
                </div>
              ))}
            </div>
          )}

          <MessageStatus isMe={isMe} hasRead={hasRead} />
        </div>
        {date && <span className="message__date">{formatDistanceToNow(new Date(date), { addSuffix: true })}</span>}
      </div>
    </div>
  )
}

export default Message
