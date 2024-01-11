import type { ComponentOverride } from './types';

export const MuiBadge: ComponentOverride<'MuiBadge'> = {
  styleOverrides: {
    standard: ({ theme }) => ({
      minWidth: theme.spacing(4),
      height: theme.spacing(4),
      padding: theme.spacing(1),
    }),
  },
};
