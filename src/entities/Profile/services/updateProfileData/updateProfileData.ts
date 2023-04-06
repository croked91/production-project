import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkCofig } from 'app/providers/StoreProvider';
import { IProfile } from '../../model/types/profile';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkCofig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileData(getState());

    try {
      const { data } = await extra.api.put<IProfile>('/profile', formData);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);
