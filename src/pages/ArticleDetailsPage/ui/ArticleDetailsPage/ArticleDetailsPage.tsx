import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('artcle-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailsPage)}>
        {t('articles not found')}
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetailsPage)}>
      <ArticleDetails id={id} />
    </div>
  );
});

export default ArticleDetailsPage;
