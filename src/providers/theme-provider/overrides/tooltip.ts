import { ComponentOverride } from './types';

export const MuiTooltip: ComponentOverride<'MuiTooltip'> = {
  styleOverrides: {
    tooltip: {
      fontWeight: 600,
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '0.3px',
    },
  },
};
