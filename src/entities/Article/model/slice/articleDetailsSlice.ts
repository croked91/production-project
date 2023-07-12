import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { IArticle } from '../types/article';
import { IArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: IArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticleById.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (
        state,
        { payload }: PayloadAction<IArticle>
      ) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(fetchArticleById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = String(payload);
      });
  }
});

export const articleDetailsReducer = articleDetailsSlice.reducer;
// export const { } = articleDetailSlice.actions;
