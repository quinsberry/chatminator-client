export type TUser = {
  fullname: string
}

export type TMessageAttachments = Array<TMessageAttachment>

export type TMessageAttachment = {
  filename: string
  url: string
}
