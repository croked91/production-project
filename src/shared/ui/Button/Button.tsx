import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import styles from './styles.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearIverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  children?: ReactNode
}

export const Button = memo(({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  square,
  size = ButtonSize.M,
  ...otherProps
}: ButtonProps) => {
  const mods: Mods = {
    [styles.square]: square
  };

  return (
    <button
      type='button'
      className={
        classNames(styles.button, mods, [className, styles[theme], styles[size]])
      }
      {...otherProps}
    >
      {children}
    </button>
  );
});
