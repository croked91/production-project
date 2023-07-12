import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkCofig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, IThunkCofig<string>>(
  'profile/fetchArticleById',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      const { data } = await extra.api.get<IArticle>(`/articles/${articleId}`);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
