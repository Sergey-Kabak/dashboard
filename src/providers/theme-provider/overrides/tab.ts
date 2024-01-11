import { ComponentOverride } from './types';

export const MuiTab: ComponentOverride<'MuiTab'> = {
  styleOverrides: {
    root: {
      minWidth: 'auto',
      '&.Mui-selected': {
        color: 'var(--blue-500)',
      },
    },
  },
};
