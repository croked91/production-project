import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './styles.module.scss';

interface LoaderProps {
  className?: string;
}

export const Loader:FC<LoaderProps> = ({ className }) => (
	<div className={classNames(styles.ldsRipple, {}, [className])}>
		<div />
		<div />
	</div>
);
