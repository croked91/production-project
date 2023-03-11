import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { IUser, IUserSchema } from '../types/user';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<IUser>) => {
      state.authData = payload;
    },
    initAuthData: state => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    userLogout: state => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  }
});

export const userReducer = userSlice.reducer;
export const { setAuthData, initAuthData, userLogout } = userSlice.actions;
