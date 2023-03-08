import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from '../types/user';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
});

export const userReducer = userSlice.reducer;
export const {} = userSlice.actions;
