import { ComponentOverride } from './types';

export const MuiLink: ComponentOverride<'MuiLink'> = {
  defaultProps: {
    color: 'primary',
    underline: 'hover' as const,
  },
  styleOverrides: {
    root: {
      color: 'var(--blue-500)',
    },
  },
};
