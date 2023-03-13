import { createSlice } from '@reduxjs/toolkit';
import { IProfileSchema } from '../types/profile';

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
    zaglushka: () => {}
  }
});

export const profileReducer = profileSlice.reducer;
export const { zaglushka } = profileSlice.actions;
