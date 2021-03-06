import { TRegistrationFormValues, TLoginFormValues, TFormErrors } from 'types/types'

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

export default (isAuth: boolean, values: TRegistrationFormValues | TLoginFormValues, errors: TFormErrors) => {
  const rules: { [key: string]: (value: string) => void } = {
    email: (value) => {
      if (isAuth) {
        if (isAuth && !value) {
          errors.email = 'Enter your email for entering'
        } else if (!regexEmail.test(value)) {
          errors.email = 'The email you’ve entered doesn’t match any account'
        }
      } else if (!isAuth) {
        if (!value) {
          errors.email = 'Email is required'
        } else if (!regexEmail.test(value)) {
          errors.email = 'Invalid email address'
        }
      }
    },

    name: (value) => {
      if (!value && !isAuth) {
        errors.name = 'Name is required'
      } else if (value.length > 16) {
        errors.name = 'You name is too long'
      }
    },

    password: (value) => {
      if (isAuth) {
        if (!value) {
          errors.password = 'Enter your password for entering'
        } else if (!regexPass.test(value)) {
          errors.password = 'The password you’ve entered is incorrect'
        }
      } else if (!isAuth) {
        if (!value) {
          errors.password = 'Password is required'
        } else if (!regexPass.test(value)) {
          errors.password = 'Password has to contain at least 1 number, 1 uppercase letter and 8 characters'
        }
      }
    },

    confirmPassword: (value) => {
      if (!value && !isAuth) {
        errors.confirmPassword = 'Confirm you password'
      } else if (value !== values.password) {
        errors.confirmPassword = 'Please make sure your passwords match'
      }
    },
  }

  Object.keys(values).forEach((key) => rules[key] && rules[key](values[key]))
}
