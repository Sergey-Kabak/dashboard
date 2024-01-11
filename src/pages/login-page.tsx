import { Avatar, Box, Container, Typography } from '@mui/material';

import { LoginForm } from '@/features/login/login-form';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const LoginPage = () => (
  <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <LoginForm />
    </Box>
  </Container>
);
