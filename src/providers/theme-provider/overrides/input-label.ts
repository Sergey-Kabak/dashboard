import { ComponentOverride } from './types';

export const MuiInputLabel: ComponentOverride<'MuiInputLabel'> = {
  styleOverrides: {
    root: {
      color: 'var(--grey-500)',
    },
    outlined: {
      lineHeight: '0.8em',
      '&.MuiInputLabel-sizeSmall': {
        lineHeight: '1em',
      },
      '&.MuiInputLabel-shrink': {
        background: 'transparent',
        padding: '0 8px',
        marginLeft: -6,
        lineHeight: '1.4375em',
      },
    },
  },
};
