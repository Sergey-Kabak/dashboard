import * as colors from '@/utils/colors';

import type { ComponentOverride } from './types';

export const MuiSwitch: ComponentOverride<'MuiSwitch'> = {
  defaultProps: {
    size: 'medium',
  },
  styleOverrides: {
    root: {
      padding: 0,
      '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
          color: '#fff',
          '& + .MuiSwitch-track': {
            backgroundColor: 'var(--primary-500)',
            opacity: 1,
            border: 0,
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
          },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
          color: 'var(--primary-500)',
          border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
          color: colors.grey[100],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.7,
        },
      },
      '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
      },
      '& .MuiSwitch-track': {
        backgroundColor: 'var(--grey-500)',
        opacity: 1,
        transition: 'all .3s',
      },
    },
    sizeSmall: () => ({
      width: 28,
      height: 16,
      '& .MuiSwitch-track': {
        borderRadius: '8px',
      },
      '& .MuiSwitch-thumb': {
        width: 12,
        height: 12,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(12px)',
      },
    }),
    sizeMedium: () => ({
      width: 40,
      height: 24,
      '& .MuiSwitch-track': {
        borderRadius: '12px',
      },
      '& .MuiSwitch-thumb': {
        width: 20,
        height: 20,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(16px)',
      },
    }),
  },
};
