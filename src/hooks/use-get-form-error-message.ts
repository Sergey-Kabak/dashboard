import { useMemo } from 'react';

import { getFieldErrorMessage } from '@/utils/form.utils'

export const useGetFormErrorMessage = (error: string | Record<string, any> | Record<string, any>[] | undefined) => {
  return useMemo(() => {
    const errorMessage = getFieldErrorMessage(error);
    return errorMessage ? `validation.${errorMessage}` : undefined;
  }, [error]);
};
