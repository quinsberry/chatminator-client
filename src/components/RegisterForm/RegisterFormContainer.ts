<<<<<<< HEAD
import { withFormik } from 'formik'

import RegisterForm from './RegisterForm'
import validateForm from '../../utils/validate'

import { TFormValues, TFormErrors } from '../../types/types'

interface OtherProps {}

interface RegisterFormProps {
=======
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik'
import RegisterForm from './RegisterForm'

type TErrors = {
  email?: string
}

interface RegisterFormValues {
>>>>>>> Before eject
  email?: string
  name?: string
  password?: string
  confirmPassword?: string
}

<<<<<<< HEAD
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
=======
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
>>>>>>> Before eject
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
