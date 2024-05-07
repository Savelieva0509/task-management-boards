import { FC, ReactNode } from 'react';
import css from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, children }) => {
  return <div className={css.modal}>{children}</div>;
};

export default Modal;
