import { ComponentOverride } from './types';

export const MuiFilledInput: ComponentOverride<'MuiFilledInput'> = {
  defaultProps: {
    fullWidth: true,
  },
  styleOverrides: {
    input: {
      padding: '8px 12px',
      lineHeight: '24px',
      height: 'auto',
      '&.MuiInputBase-inputMultiline': {
        resize: 'vertical',
        padding: '8px 12px',
      },
    },
    root: {
      padding: 0,
      backgroundColor: 'var(--grey-50)',
      border: '1px solid var(--grey-50)',
      borderRadius: 4,
      '&:before, &:after': {
        content: 'none',
      },
      '&:hover:not(.Mui-disabled, .Mui-error)': {
        backgroundColor: 'var(--grey-50)',
        borderColor: 'var(--grey-200)',
      },
      '&.Mui-focused': {
        backgroundColor: 'var(--grey-50)',
        borderColor: 'var(--grey-200)',
      },
      '&.Mui-error': {
        backgroundColor: 'var(--grey-50)',
        borderColor: 'var(--red-500)',
      },
      '&.Mui-disabled': {
        backgroundColor: 'var(--grey-50)',
        borderColor: 'var(--grey-50)',
      },
      '&.MuiInputBase-adornedEnd': {
        paddingRight: 4,
      },
      '&.MuiInputBase-multiline': {
        padding: 0,
      },
      '& $notchedOutline': {
        borderColor: 'transparent',
      },
    },
    inputSizeSmall: {
      padding: '6px 8px 6px 12px',
      lineHeight: '20px',
      height: 'auto',
    },
    inputMultiline: {
      padding: 0,
    },
  },
};
