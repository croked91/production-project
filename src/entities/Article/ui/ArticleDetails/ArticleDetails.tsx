import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/helpers/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/ui/Text';
import {
  getArticlesDetailsData, getArticlesDetailsError, getArticlesDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
  ArticleBlockT, ArticleBlockType, IArticleCodeBlock, IArticleImageBlock, IArticleTextBlock
} from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string
}

const reducers = {
  articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation('article-details-page');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesDetailsIsLoading);
  const data = useSelector(getArticlesDetailsData);
  const error = useSelector(getArticlesDetailsError);

  const getBlockType = useCallback((block: ArticleBlockT) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent block={block as IArticleCodeBlock} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block as IArticleImageBlock} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block as IArticleTextBlock} />;
      default:
        return null;
    }
  }, []);

  const blocks = data?.blocks.map(block => (
    getBlockType(block)
  ));

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div className={classNames(styles.ArticleDetails)}>
        <Skeleton className={styles.avatar} width={200} height={200} border='50%' />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.title} width={600} height={24} />
        <Skeleton className={styles.skeleton} width='100%' height={200} />
        <Skeleton className={styles.skeleton} width='100%' height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('erorr-on-article-loading')}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={data?.img} />
        </div>
        <Text
          size={TextSize.L}
          title={data?.title}
          text={data?.subtitle}
        />
        <div className={styles.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={String(data?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={String(data?.createdAt)} />
        </div>
        <div className={styles.blocks}>
          {blocks}
        </div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
