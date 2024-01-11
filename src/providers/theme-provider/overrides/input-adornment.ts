import { ComponentOverride } from './types';

export const MuiInputAdornment: ComponentOverride<'MuiInputAdornment'> = {
  styleOverrides: {
    root: {
      margin: 0,
    },
    positionStart: {
      marginLeft: '4px',
    },
    positionEnd: {
      marginRight: '4px',
    },
  },
};
