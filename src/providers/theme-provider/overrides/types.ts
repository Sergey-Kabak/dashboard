import {
  ComponentNameToClassKey,
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
  Theme,
} from '@mui/material/styles';

export interface ComponentOverride<T extends keyof ComponentNameToClassKey> {
  defaultProps?: ComponentsProps[T];
  styleOverrides?: ComponentsOverrides<Theme>[T];
  variants?: ComponentsVariants[T];
}
