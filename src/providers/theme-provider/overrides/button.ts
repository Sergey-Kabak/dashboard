import { ComponentOverride } from './types';

const disabledStyle = {
  '&.Mui-disabled': {
    backgroundColor: 'var(--grey-100)',
    color: 'var(--grey-500)',
  },
};

export const MuiButton: ComponentOverride<'MuiButton'> = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      minWidth: 0,
      fontWeight: 800,
      lineHeight: '24px',
    },
    contained: {
      ...disabledStyle,
    },
    outlined: {
      ...disabledStyle,
    },
    outlinedError: {
      backgroundColor: 'var(--red-50)',
    },
    sizeSmall: {
      padding: '4px 12px',
      fontSize: '14px',
    },
    sizeMedium: {
      padding: '8px 12px',
      fontSize: '15px',
    },
    sizeLarge: {
      padding: '12px 16px',
      fontSize: '16px',
    },
    outlinedSizeSmall: {
      padding: '3px 12px',
    },
    outlinedSizeMedium: {
      padding: '7px 12px',
    },
    outlinedSizeLarge: {
      padding: '11px 16px',
    },
  },
  variants: [
    {
      props: { size: 'large' },
      style: ({ theme }) => ({
        height: theme.spacing(10),
      }),
    },
    {
      props: { color: 'primary', variant: 'contained' },
      style: ({ theme }) => ({
        height: theme.spacing(10),
        '&:hover': {
          backgroundColor: theme.palette.primary['light'],
        },
        '&:active': {
          backgroundColor: theme.palette.primary['dark'],
        },
      }),
    },
  ],
};
