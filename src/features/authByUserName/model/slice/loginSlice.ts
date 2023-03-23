import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsermname } from '../services/loginByUsername';
import { ILoginSchema } from '../types/LoginSchema';

const initialState: ILoginSchema = {
  isLoading: false,
  username: '',
  password: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUsermname.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsermname.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(loginByUsermname.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = String(payload);
      });
  }
});

export const loginReducer = loginSlice.reducer;
export const { setUsername, setPassword } = loginSlice.actions;
