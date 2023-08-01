import { EntityState } from '@reduxjs/toolkit';
import { ArticleViewT, IArticle } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;
    view: ArticleViewT;
    page?: number;
    limit?: number;
    hasMore?: boolean
}
