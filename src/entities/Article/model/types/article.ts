import { IUser } from 'entities/User';

export const ArticleBlockType = {
  CODE: 'CODE',
  IMAGE: 'IMAGE',
  TEXT: 'TEXT'
} as const;

export type ArticleBlockTypeT = typeof ArticleBlockType[keyof typeof ArticleBlockType]

interface IArticleBlockBase {
  id: string,
  type: ArticleBlockTypeT
}

export interface IArticleCodeBlock extends IArticleBlockBase {
  code: string
}

export interface IArticleImageBlock extends IArticleBlockBase {
  src: string
  title: string
}

export interface IArticleTextBlock extends IArticleBlockBase {
  paragraphs: string[]
  title?: string
}

export type ArticleBlockT = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock

export const ArticleType = {
  IT: 'IT',
  SCIENCE: 'SCIENCE',
  ECONOMICS: 'ECONOMICS'
} as const;

export type ArticleTypeT = typeof ArticleType[keyof typeof ArticleType]

export const ArticleView = {
  BIG: 'BIG',
  SMALL: 'SMALL'
} as const;

export type ArticleViewT = typeof ArticleView[keyof typeof ArticleView];

export interface IArticle {
  user: IUser;
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: string[]
  blocks: ArticleBlockT[]
}
