import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './styles.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage:FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('not-found-page');
  return (
    <div className={classNames(styles.notFoundPage, {}, [className])}>
      {t('page not found')}
    </div>
  );
};
