import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Loader } from 'shared/ui/Loader';
import styles from './styles.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader:FC<PageLoaderProps> = ({ className }) => (
  <div className={classNames(styles.pageLoader, {}, [className])}>
    <Loader />
  </div>
);
