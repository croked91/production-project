import { CSSProperties, memo, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/helpers/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo(({
  className, src, size, alt
}: AvatarProps) => {
  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100
  }), [size]);

  const mods: Mods = {

  };

  return (
    <img
      alt={alt}
      style={style}
      src={src}
      className={classNames(styles.avatar, mods, [className])}
    />
  );
});
