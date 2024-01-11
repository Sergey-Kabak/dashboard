import { FormHelperText, OutlinedTextFieldProps, Stack, TextField, Typography } from '@mui/material';
import { RegisterOptions, useController } from 'react-hook-form';

import { useGetFormErrorMessage } from '@/hooks/use-get-form-error-message';

export interface FormInputProps extends OutlinedTextFieldProps {
  name: string;
  label?: string;
  helperText?: string;
  maxLength?: number;
  showHelperText?: boolean;
  required?: boolean;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
}

export const FormInput = ({
  name,
  label,
  required,
  maxLength,
  inputProps,
  helperText,
  showHelperText = true,
  rules,
  ...otherProps
}: FormInputProps) => {
  const {
    field: { ref, value, ...otherFieldProps },
    fieldState: { error },
  } = useController({ name, rules });

  const errorText = useGetFormErrorMessage(error);

  const showFooter = (showHelperText && (errorText || helperText)) || !!maxLength;

  return (
    <Stack data-testid="formInput" spacing={1} width="100%">
      <TextField
        error={!!error}
        inputProps={{ maxLength, ...inputProps }}
        inputRef={ref}
        label={label}
        required={required}
        value={`${value}`}
        {...otherFieldProps}
        {...otherProps}
      />
      {showFooter && (
        <Stack direction="row" spacing={0}>
          {showHelperText && (
            <FormHelperText error={!!error || otherProps.error} sx={{ flex: 1, '&:empty': { display: 'none' } }}>
              {errorText || helperText}
            </FormHelperText>
          )}
          {maxLength && (
            <Typography color="textSecondary" component="p" sx={{ ml: 'auto', pl: 2 }} variant="caption">
              {`${value?.length ?? 0} / ${maxLength}`}
            </Typography>
          )}
        </Stack>
      )}
    </Stack>
  );
};
