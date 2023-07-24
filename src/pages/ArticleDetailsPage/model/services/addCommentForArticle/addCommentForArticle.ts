import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkCofig } from 'app/providers/StoreProvider';
import { getArticlesDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import {
  fetchCommentsByArticleId
} from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    IThunkCofig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra, dispatch, rejectWithValue, getState
    } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticlesDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
