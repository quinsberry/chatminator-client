export type TUser = {
  _id: string
  name: string
  avatar?: string
  isOnline: boolean
}

export type TLastMessage = {
  _id: string
  text: string
  created_at: Date
  hasRead?: boolean
  user: TUser
  unread?: number
}

export type TMessage = {
  avatar: string
  user: TUser
  text?: string
  date?: Date
  isMe?: boolean
  audio?: string
  hasRead?: boolean
  attachments?: TMessageAttachments
  isTyping?: boolean
}

export type TMessageAttachments = Array<TMessageAttachment>

export type TMessageAttachment = {
  filename: string
  url: string
}

export type TRegistrationFormValues = {
  email: string
  name: string
  password: string
  confirmPassword: string
  [key: string]: string
}

export type TLoginFormValues = {
  email: string
  password: string
  [key: string]: string
}

export type TFormErrors = {
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
  [key: string]: string | undefined
}
