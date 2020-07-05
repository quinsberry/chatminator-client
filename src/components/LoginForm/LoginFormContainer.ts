import { withFormik } from 'formik'

import LoginForm from './LoginForm'
import validateForm from '../../utils/validate'

import { TLoginFormValues, TFormErrors } from '../../types/types'

interface OtherProps {}

interface RegisterFormProps {
  email?: string
  password?: string
}

export default withFormik<RegisterFormProps, TLoginFormValues>({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: (values: TLoginFormValues) => {
    let errors: TFormErrors = {}

    validateForm(true, values, errors)
    return errors
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'LoginForm',
})(LoginForm)
