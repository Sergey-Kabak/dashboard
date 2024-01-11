import { ComponentOverride } from './types';

export const MuiButtonBase: ComponentOverride<'MuiButtonBase'> = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      transition: 'none',
      whiteSpace: 'nowrap',
    },
  },
};
