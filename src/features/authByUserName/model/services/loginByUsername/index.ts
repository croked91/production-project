import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkCofig } from 'app/providers/StoreProvider';
import { IUser, setAuthData } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface ILoginByUsernameProps {
  username: string,
  password: string
}

// eslint-disable-next-line max-len
export const loginByUsermname = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkCofig<string>>(
  'login/loginByUsermname',
  async ({ username, password }, { extra, dispatch, rejectWithValue }) => {
    try {
      const { data } = await extra.api.post<IUser>('/login', { username, password });

      if (!data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(setAuthData(data));
      if (extra.navigate) extra.navigate('/about');
      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
