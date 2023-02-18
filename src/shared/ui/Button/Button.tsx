import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './styles.module.scss';

export enum ThemeButton {
	CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = props => {
	const {
		className,
		children,
		theme = ThemeButton.CLEAR,
		...otherProps
	} = props;
	return (
		<button
			type='button'
			className={
				classNames(styles.button, {}, [className, styles[theme]])
			}
			{...otherProps}
		>
			{children}
		</button>
	);
};
