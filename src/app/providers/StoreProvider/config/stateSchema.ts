import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { IArticleDetailsSchema } from 'entities/Article';
import { IProfileSchema } from 'entities/Profile';
import { IUserSchema } from 'entities/User';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ILoginSchema } from 'features/authByUsername';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

import { NavigateOptions, To } from 'react-router-dom';

export interface StateSchema {
  user: IUserSchema,

  // async
  loginForm?: ILoginSchema
  profile?: IProfileSchema
  articleDetails?: IArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: IReducerManager
}

export interface IThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface IThunkCofig<T> {
  rejectValue: T,
  extra: IThunkExtraArg,
  state: StateSchema
}
