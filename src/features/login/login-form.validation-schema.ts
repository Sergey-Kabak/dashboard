import * as yup from 'yup';

import { FormField } from './login-form-types';

export const validationSchema = yup.object().shape({
  [FormField.email]: yup.string().required('required field'),
  [FormField.password]: yup.string().required('required field'),
  [FormField.remember]: yup.boolean(),
})