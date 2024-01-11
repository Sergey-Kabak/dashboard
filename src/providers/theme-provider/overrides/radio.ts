import { ComponentOverride } from './types';

export const MuiRadio: ComponentOverride<'MuiRadio'> = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
};
