import { ComponentOverride } from '@/providers/theme-provider/overrides/types';

export const MuiLinearProgress: ComponentOverride<'MuiLinearProgress'> = {
  styleOverrides: {
    root: {
      height: 6,
      borderRadius: 100,
    },
    bar: {
      borderRadius: 100,
    },
  },
};
