import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './Text.module.scss';

// const TextTheme = new Map([['PRIMARY', 'primary'], ['ERROR', 'error']]);

// const TextThemeObj = Object.freeze(TextTheme);
// type x = keyof typeof TextThemeObj

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

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemeT
  align?: TextAlignT
}

export const Text = memo(({
  className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT
}: TextProps) => (
  <div className={classNames(styles.text, {}, [className, styles[theme], styles[align]])}>
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
));
