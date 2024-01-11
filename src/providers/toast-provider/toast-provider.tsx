import { FC, PropsWithChildren, useEffect } from 'react';

import { toast, ToastContainer, ToastContainerProps } from 'react-toastify';

import { useLocaleContext } from '@/contexts/locale-context';

import './toast-provider.styles.css';

export const ToastProvider: FC<PropsWithChildren<ToastContainerProps>> = ({ children, ...otherProps }) => {
  const { locale } = useLocaleContext();

  useEffect(() => {
    toast.dismiss();
  }, [locale]);

  return (
    <>
      {children}
      <ToastContainer {...otherProps} />
    </>
  );
};

ToastProvider.defaultProps = {
  limit: 5,
  theme: 'light',
  autoClose: 3000,
  position: 'top-right',
  hideProgressBar: true,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  draggable: false,
  closeOnClick: true,
  closeButton: true,
};
