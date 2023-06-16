import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import { validateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

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

const dataWithError = {
  first: '',
  lastname: 'Тихомиров',
  age: undefined,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Уфа',
  username: 'admin'
};

const dataWithoutUsername = {
  first: 'Егор',
  lastname: 'Тихомиров',
  age: 22,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Уфа',
  username: '',
  avatar: 'wqwedqw'
};

describe('validateProfileData', () => {
  test('success validate', () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('validate with some error', () => {
    const result = validateProfileData(dataWithError);
    expect(result).toEqual([
      validateProfileError.INCORRECT_USER_DATA,
      validateProfileError.INCORRECT_AGE,
      validateProfileError.INCORRECT_AVATAR
    ]);
  });

  test('validate with username error', () => {
    const result = validateProfileData(dataWithoutUsername);
    expect(result).toEqual([
      validateProfileError.INCORRECT_USERNAME
    ]);
  });
});
