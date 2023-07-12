import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './Text.module.scss';

export const TextTheme = {
  PRIMARY: 'primary',
  ERROR: 'error'
} as const;

type TextThemeT = typeof TextTheme[keyof typeof TextTheme]

export const TextAlign = {
  RIGHT: 'right',
  CENTER: 'center',
  LEFT: 'left'
} as const;

type TextAlignT = typeof TextAlign[keyof typeof TextAlign]

export const TextSize = {
  M: 'size_m',
  L: 'size_l'
} as const;

type TextSizeT = typeof TextSize[keyof typeof TextSize]

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemeT
  align?: TextAlignT
  size?: TextSizeT
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M
}: TextProps) => (
  <div className={classNames(styles.textComponent, {}, [className, styles[theme], styles[align], styles[size]])}>
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
));
