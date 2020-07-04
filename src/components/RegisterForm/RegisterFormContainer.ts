import { withFormik } from 'formik'
import RegisterForm from './RegisterForm'

type TErrors = {
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
}

interface RegisterFormValues {
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
}

interface OtherProps {}

interface RegisterFormProps {
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
}

export default withFormik<RegisterFormProps, RegisterFormValues>({
  validate: (values: RegisterFormValues) => {
    let errors: TErrors = {}

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!regexEmail.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.name) {
      errors.name = 'Name is required'
    } else if (values.name.length > 20) {
      errors.name = 'You name is too long'
    }

    if (!values.password) {
      errors.password = 'Password is required'
    } else if (!regexPass.test(values.password)) {
      errors.password =
        'Password has to contain at least 1 number, 1 uppercase letter and 8 characters'
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm you password'
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Please make sure your passwords match'
    }
    return errors
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'RegisterForm',
})(RegisterForm)
