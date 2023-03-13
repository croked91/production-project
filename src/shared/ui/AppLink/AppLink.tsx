import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './styles.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode
}

export const AppLink = memo(({
  to,
  className,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}:AppLinkProps) => (
  <Link
    to={to}
    className={classNames(styles.applink, {}, [className, styles[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
));
