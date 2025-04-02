import React, { useRef } from 'react';
import Button from './Button';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (isOpen) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }

  return (
    <dialog ref={dialogRef} className="modal__overlay" onClick={onClose}>
      <div className="modal__header">{title}</div>
      <div className="modal__content">{children}</div>
      <Button label="OK" onClick={onClose} />
    </dialog>
  );
};

export default Modal;
