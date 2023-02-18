import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from './styles.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError:FC<PageErrorProps> = ({ className }) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};
	return (
		<div className={classNames(styles.pageError, {}, [className])}>
			<p>{t('unexpected-error')}</p>
			<Button onClick={reloadPage}>{t('reload-page')}</Button>
		</div>
	);
};
