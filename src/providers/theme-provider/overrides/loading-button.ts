import { ComponentOverride } from './types';

export const MuiLoadingButton: ComponentOverride<'MuiLoadingButton'> = {
  styleOverrides: {
    loadingIndicator: {
      color: 'var(--primary-200)',
    },
  },
};
