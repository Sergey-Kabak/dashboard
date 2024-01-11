import { PropsWithChildren } from 'react';

import { CssBaseline, GlobalStyles, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import type {} from '@mui/lab/themeAugmentation';

const globalStyles = {
  ':root': {},
};

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    spacing: (x: number) => x * 4,
    breakpoints: {
      values: {
        xs: 0,
        sm: 320,
        md: 768,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: 'light',
      common: {
        black: '#000',
        white: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
