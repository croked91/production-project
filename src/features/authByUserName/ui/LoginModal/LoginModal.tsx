import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

export const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={classNames('', {}, [className])}
    lazy
  >
    <LoginFormAsync onSuccess={onClose} />
  </Modal>
);
