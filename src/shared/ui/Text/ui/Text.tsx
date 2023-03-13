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

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextThemeT
}

export const Text = memo(({
  className, title, text, theme = TextTheme.PRIMARY
}: TextProps) => (
  <div className={classNames(styles.text, {}, [className, styles[theme]])}>
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.text}>{text}</p>}
  </div>
));
