import React from 'react';
import Button from './Button';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__header">{title}</div>
      <div className="modal__content">{children}</div>
      <Button label="OK" onClick={onClose} />
    </div>
  );
};

export default Modal;
