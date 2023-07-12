import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { IArticleCodeBlock } from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/helpers/classNames';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: IArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
