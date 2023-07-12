import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { IArticleTextBlock } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block?: IArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation();

  const paragraphs = block?.paragraphs.map(paragraph => (
    <Text
      key={paragraph}
      title={paragraph}
      className={styles.paragraph}
    />
  ));

  return (
    <div className={classNames(styles.ArticleTextBlockComponent)}>
      {block?.title && (
        <Text title={block.title} size={TextSize.M} />
      )}
      {paragraphs}
    </div>
  );
});
