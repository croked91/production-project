import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, setAuthData } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface ILoginByUsernameProps {
  username: string,
  password: string
}

export const loginByUsermname = createAsyncThunk<IUser, ILoginByUsernameProps, {rejectValue: string}>(
  'login/loginByUsermname',
  async ({ username, password }, thunkApi) => {
    try {
      const { data } = await axios.post<IUser>('http://localhost:8000/login', { username, password });

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      thunkApi.dispatch(setAuthData(data));
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(JSON.stringify(error));
    }
  }
);
