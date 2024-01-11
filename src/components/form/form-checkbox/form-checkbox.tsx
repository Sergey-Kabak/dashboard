import { Checkbox, CheckboxProps } from '@mui/material';
import { useController } from 'react-hook-form';

export interface FormCheckboxProps extends CheckboxProps {
  name: string;
}

export const FormCheckbox = ({ name, ...otherProps }: FormCheckboxProps) => {
  const {
    field: { value, ...otherFieldProps },
  } = useController({ name });

  return <Checkbox checked={value} {...otherFieldProps} {...otherProps} />;
};
