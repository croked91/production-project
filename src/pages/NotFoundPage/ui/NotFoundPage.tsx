import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './styles.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = ({ className }) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(styles.notFoundPage, {}, [className])}>
			{t('not-found-page')}
		</div>
	);
};
