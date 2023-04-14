import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return profile form', () => {
    const form = {
      first: 'Егор',
      lastname: 'Тихомиров',
      age: 22,
      currency: Currency.USD,
      country: Country.Russia,
      city: 'Уфа',
      username: 'admin'
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        form
      }
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
});

describe('getProfileForm', () => {
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
