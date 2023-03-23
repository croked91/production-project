import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { IProfile, IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (
        state,
        { payload }: PayloadAction<IProfile>
      ) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = String(payload);
      });
  }
});

export const profileReducer = profileSlice.reducer;
export const { actions } = profileSlice;
