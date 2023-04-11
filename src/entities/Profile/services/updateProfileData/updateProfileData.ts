import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkCofig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { IProfile } from '../../model/types/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkCofig<string>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());

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
