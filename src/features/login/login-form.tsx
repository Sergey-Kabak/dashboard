import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, FormControlLabel, Grid, Link, Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { FormCheckbox, FormInput } from '@/components/form';

import { FormField } from './login-form-types';
import { validationSchema } from './login-form.validation-schema';

export const LoginForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      [FormField.email]: 'admin@admin',
      [FormField.password]: '12345678',
      [FormField.remember]: true,
    },
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const handleSubmitForm = form.handleSubmit((values) => {
    console.log(values);
    navigate('/');
  });

  return (
    <FormProvider {...form}>
      <Box component="form" data-testid="login-form" minWidth="360px" onSubmit={handleSubmitForm}>
        <Stack mt={2} spacing={2}>
          <Stack spacing={6}>
            <FormInput
              autoFocus
              required
              autoComplete="email"
              data-testid="email-input"
              label="Email Address"
              name={FormField.email}
              variant="outlined"
            />
            <FormInput
              required
              autoComplete="off"
              data-testid="password-input"
              label="Password"
              name={FormField.password}
              type="password"
              variant="outlined"
            />
          </Stack>
          <FormControlLabel control={<FormCheckbox color="primary" name={FormField.remember} />} label="Remember me" />
          <Button fullWidth sx={{ mt: 3, mb: 2 }} type="submit" variant="contained">
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don&apos;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </FormProvider>
  );
};
