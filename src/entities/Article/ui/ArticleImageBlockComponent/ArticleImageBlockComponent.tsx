import { IArticleImageBlock } from 'entities/Article/model/types/article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Text } from 'shared/ui/Text';
import { TextAlign } from 'shared/ui/Text/ui/Text';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block?: IArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticleImageBlockComponent)}>
      <img src={block?.src} alt={block?.title} className={styles.image} />
      {block?.title && (
        <Text title={block?.title} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
