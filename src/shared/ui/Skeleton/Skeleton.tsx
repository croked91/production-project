import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string
}

export const Skeleton = memo(({
  className, height, width, border
}: SkeletonProps) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius: border
  };

  return (
    <div
      style={style}
      className={classNames(styles.Skeleton)}
    />
  );
});
