import hexRgb from 'hex-rgb';

import * as colors from '@/utils/colors';

import InfoIcon from '@/assets/icons/info.svg?react';

import type { ComponentOverride } from './types';

export const MuiAlert: ComponentOverride<'MuiAlert'> = {
  defaultProps: {
    variant: 'outlined' as const,
    iconMapping: {
      info: <InfoIcon />,
    },
  },
  styleOverrides: {
    outlinedSuccess: {
      backgroundColor: 'var(--green-50)',
    },
    outlinedInfo: {
      backgroundColor: 'var(--blue-grey-300)',
      borderColor: '#027BCE',
      '& .MuiAlert-icon': {
        fontSize: '24px',
      },
      '& .MuiAlert-message': {
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
    outlinedWarning: {
      backgroundColor: 'var(--amber-50)',
    },
    outlinedError: {
      backgroundColor: 'var(--red-50)',
    },
    standardWarning: {
      backgroundColor: hexRgb(colors.yellow[500], { format: 'css', alpha: 0.16 }),
      padding: '0 16px',
    },
  },
};
