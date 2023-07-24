import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkCofig } from 'app/providers/StoreProvider';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { IProfile, ValidateProfileErrorT, validateProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkCofig<ValidateProfileErrorT[]>>(
  'profile/updateProfileData',
  async (_, { extra, rejectWithValue, getState }) => {
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const { data } = await extra.api.put<IProfile>(`/profile${formData?.id}`, formData);

      if (!data) {
        throw new Error();
      }

      return data;
    } catch (error) {
      return rejectWithValue([validateProfileError.SERVER_ERROR]);
    }
  }
);
