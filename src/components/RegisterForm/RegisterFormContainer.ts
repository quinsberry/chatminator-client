import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik'
import RegisterForm from './RegisterForm'

type TErrors = {
  email?: string
}

interface RegisterFormValues {
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
}

interface OtherProps {}

interface RegisterFormProps {
  initialEmail?: string
  email: string
  name: string
  password: string
  confirmPassword: string
}

export default withFormik<RegisterFormProps, RegisterFormValues>({
  mapPropsToValues: () => ({ email: 'qweqweqwe' }),
  validate: (values: RegisterFormValues) => {
    let errors: TErrors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
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
