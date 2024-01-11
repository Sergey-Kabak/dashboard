import { keepPreviousData, QueryClient } from '@tanstack/react-query';

import type { AxiosError } from 'axios';

const RETRY_COUNT = 2;
const RETRY_DELAY = 500;

const checkRetry = (retryIndex: number, error: unknown) =>
  retryIndex < RETRY_COUNT && (error as AxiosError).response?.status === 401;

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
        placeholderData: keepPreviousData,
        retry: checkRetry,
        retryDelay: RETRY_DELAY,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: checkRetry,
        retryDelay: RETRY_DELAY,
      },
    },
  });
