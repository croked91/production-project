import { useTheme } from 'app/providers/ThemeProvider';
import {
	FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState
} from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Portal } from 'shared/ui/Portal';

import styles from './styles.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: ()=>void

}

const ANIMATION_DELAY = 300;

export const Modal:FC<ModalProps> = ({
	className, children, isOpen, onClose
}) => {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();
	const { theme } = useTheme();

	const mods:Record<string, boolean> = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing
	};

	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation();
	};

	const onCloseHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onKeyDownHandler = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') onCloseHandler();
	}, [onCloseHandler]);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDownHandler);
		}
		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDownHandler);
		};
	}, [isOpen, onKeyDownHandler]);

	return (
		<Portal>
			<div className={classNames(styles.modal, mods, [className])}>
				<div className={styles.overlay} onClick={onCloseHandler}>
					<div className={styles.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
