import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './Icon.module.scss';

interface IconProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export const Icon = memo(({ className, Svg }: IconProps) => (
  <Svg className={classNames(styles.Icon, {}, [className])} />
));
