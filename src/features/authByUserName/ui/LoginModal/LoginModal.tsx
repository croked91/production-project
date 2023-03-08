import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Modal } from 'shared/ui/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './styles.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

export const LoginModal:FC<LoginModalProps> = ({ className, isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={classNames(styles.loginmodal, {}, [className])}
    lazy
  >
    <LoginForm />
  </Modal>
);