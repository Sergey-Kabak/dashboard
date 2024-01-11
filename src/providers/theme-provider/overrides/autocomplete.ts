import { ComponentOverride } from './types';

export const MuiAutocomplete: ComponentOverride<'MuiAutocomplete'> = {
  styleOverrides: {
    inputRoot: {
      padding: '0 0 0 4px',
      '& .MuiInputBase-input': {
        padding: '7px 0 7px 8px',
        '&.MuiInputBase-inputAdornedStart': {
          paddingLeft: '4px',
        },
      },
    },
    endAdornment: {
      top: '50%',
      transform: 'translateY(-50%)',
    },
    tag: {
      backgroundColor: 'var(--blue-grey-500)',
      '& .MuiChip-deleteIcon': {
        fill: 'var(--primary-500)',
      },
    },
  },
};
