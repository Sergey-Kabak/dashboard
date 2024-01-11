import { useCallback, useState } from 'react';

export interface UseDisclosure {
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}

export const useDisclosure = (initialState = false): UseDisclosure => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleToggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    onToggle: handleToggle,
    onOpen: handleOpen,
    onClose: handleClose,
  };
};
