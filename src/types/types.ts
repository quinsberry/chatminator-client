export type TUser = {
  fullname: string
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
