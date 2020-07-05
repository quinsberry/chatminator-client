import { FormikTouched } from 'formik'
import { TLoginFormValues, TRegistrationFormValues, TFormErrors } from './../../types/types'

type TTouched = FormikTouched<TLoginFormValues | TRegistrationFormValues>
type TKey = 'email' | 'name' | 'password' | 'confirmPassword'

export default (key: TKey, touched: TTouched, errors: TFormErrors) => {
  if (touched[key]) {
    if (errors[key]) {
      return 'error'
    } else {
      return 'success'
    }
  } else {
    return ''
  }
}
