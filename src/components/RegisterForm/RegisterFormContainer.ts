import { withFormik } from 'formik'

import RegisterForm from './RegisterForm'
import validateForm from '../../utils/validate'

import { TFormValues, TFormErrors } from '../../types/types'

interface OtherProps {}

interface RegisterFormProps {
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
}

export default withFormik<RegisterFormProps, TFormValues>({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  }),
  validate: (values: TFormValues) => {
    let errors: TFormErrors = {}

    validateForm(false, values, errors)
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
