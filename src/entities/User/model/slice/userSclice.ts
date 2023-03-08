import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { IUserSchema } from '../types/user';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<IUser>) => {
      state.authdata = payload;
    },
    initAuthData: state => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      console.log(user);
      if (user) {
        state.authdata = JSON.parse(user);
      }
    },
    userLogout: state => {
      state.authdata = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  }
});

export const userReducer = userSlice.reducer;
export const { setAuthData, initAuthData, userLogout } = userSlice.actions;
