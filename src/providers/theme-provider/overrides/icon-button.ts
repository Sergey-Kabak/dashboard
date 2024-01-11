import { ComponentOverride } from './types';

export const MuiIconButton: ComponentOverride<'MuiIconButton'> = {
  styleOverrides: {
    root: {
      borderRadius: '4px',
    },
    sizeLarge: ({ theme }) => ({
      width: theme.spacing(10),
      height: theme.spacing(10),
      fontSize: '1.25rem',
    }),
    sizeMedium: ({ theme }) => ({
      width: theme.spacing(8),
      height: theme.spacing(8),
      fontSize: '1rem',
    }),
    sizeSmall: ({ theme }) => ({
      width: theme.spacing(6),
      height: theme.spacing(6),
      fontSize: '0.75rem',
    }),
  },
};
