import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../../services/updateProfileData/updateProfileData';
import { IProfileSchema, validateProfileError } from '../types/profile';
import {
  cancelEdit, profileReducer, setReadonly, updateProfile
} from './profileSlice';

const data = {
  first: 'Егор',
  lastname: 'Тихомиров',
  age: 22,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Уфа',
  username: 'admin',
  avatar: 'wqwedqw'
};

describe('profileSlice', () => {
  test('setReadonly', () => {
    const state: DeepPartial<IProfileSchema> = {
      readonly: false
    };
    expect(profileReducer(state as IProfileSchema, setReadonly(true)))
      .toEqual({ readonly: true });
  });

  test('cancelEdit', () => {
    const state: DeepPartial<IProfileSchema> = {
      data,
      form: {
        username: ''
      }
    };
    expect(profileReducer(state as IProfileSchema, cancelEdit()))
      .toEqual({
        readonly: true,
        form: data,
        validateError: undefined,
        data
      });
  });

  test('updateProfile', () => {
    const state: DeepPartial<IProfileSchema> = {};
    expect(profileReducer(state as IProfileSchema, updateProfile({
      username: 'admin1'
    })))
      .toEqual(
        {
          form: { username: 'admin1' }
        }
      );
  });

  test('pending updateProfileData', () => {
    const state: DeepPartial<IProfileSchema> = {
      validateError: [validateProfileError.SERVER_ERROR],
      isLoading: false
    };
    expect(profileReducer(state as IProfileSchema, updateProfileData.pending))
      .toEqual(
        {
          validateError: undefined,
          isLoading: true
        }
      );
  });

  test('fullfiled updateProfileData', () => {
    const state: DeepPartial<IProfileSchema> = {
      data
    };

    const updatedData = {
      ...data,
      username: 'admin2'
    };

    expect(profileReducer(state as IProfileSchema, updateProfileData.fulfilled(updatedData, '')))
      .toEqual(
        {
          isLoading: false,
          data: updatedData,
          form: updatedData,
          readonly: true,
          validateError: undefined
        }
      );
  });
});
