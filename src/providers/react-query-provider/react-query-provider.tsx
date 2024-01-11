import { FC, PropsWithChildren } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { createQueryClient } from './react-query-provider.utils';

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = createQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools buttonPosition="bottom-left" position="bottom" />
    </QueryClientProvider>
  );
};
