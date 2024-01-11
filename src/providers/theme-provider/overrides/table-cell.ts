import { ComponentOverride } from './types';

export const MuiTableCell: ComponentOverride<'MuiTableCell'> = {
  styleOverrides: {
    root: {
      width: 'auto',
      fontSize: '0.875rem',
      padding: '12px 16px',
      borderColor: 'var(--grey-100)',
    },
    head: {
      fontWeight: 600,
    },
  },
};
