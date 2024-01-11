import { ComponentOverride } from './types';

export const MuiCheckbox: ComponentOverride<'MuiCheckbox'> = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
};
