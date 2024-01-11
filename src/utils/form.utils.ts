import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';

export const getFieldErrorMessage = (
  error: string | Record<string, any> | Record<string, any>[] | undefined,
  errorKey = 'message',
): string | undefined => {
  if (isString(error)) {
    return error;
  } else if (isArray(error)) {
    return error.map((item) => getFieldErrorMessage(item)).find((item) => !!item);
  } else if (isObject(error)) {
    return Object.entries(error)
      .map(([key, value]) => {
        if (!isString(value) && !key.includes('ref')) {
          return getFieldErrorMessage(value);
        }
        return key === errorKey ? value : undefined;
      })
      .find((item) => !!item);
  }
  return undefined;
};
