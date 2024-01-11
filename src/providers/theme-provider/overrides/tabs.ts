import { ComponentOverride } from './types';

export const MuiTabs: ComponentOverride<'MuiTabs'> = {
  styleOverrides: {
    vertical: {
      overflow: 'visible',
    },
    indicator: {
      backgroundColor: 'var(--blue-500)',
    },
    scroller: {
      '&:before': {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        backgroundColor: 'var(--grey-100)',
        content: `''`,
      },
    },
  },
};
