import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../../services/updateProfileData/updateProfileData';
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
  reducers: {
    setReadonly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    updateProfile: (state, { payload }: PayloadAction<IProfile>) => {
      state.form = {
        ...state.data,
        ...payload
      };
    },
    cancelEdit: state => {
      state.readonly = true;
      state.form = state.data;
    }
  },
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
        state.form = payload;
      })
      .addCase(fetchProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = String(payload);
      })
      .addCase(updateProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (
        state,
        { payload }: PayloadAction<IProfile>
      ) => {
        state.isLoading = false;
        state.data = payload;
        state.form = payload;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = String(payload);
      });
  }
});

export const profileReducer = profileSlice.reducer;
export const { setReadonly, updateProfile, cancelEdit } = profileSlice.actions;
