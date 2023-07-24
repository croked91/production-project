import { CountryT } from 'entities/Country';
import { CurrencyT } from 'entities/Currency';

export const validateProfileError = {
  INCORRECT_USER_DATA: 'INCORRECT_USER_DATA',
  INCORRECT_AGE: 'INCORRECT_AGE',
  INCORRECT_CITY: 'INCORRECT_CITY',
  INCORRECT_CURRENCY: 'INCORRECT_CURRENCY',
  INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
  INCORRECT_AVATAR: 'INCORRECT_AVATAR',
  INCORRECT_USERNAME: 'INCORRECT_USERNAME',
  NO_DATA: 'NO_DATA',
  SERVER_ERROR: 'SERVER_ERROR'
} as const;

export type ValidateProfileErrorT = keyof typeof validateProfileError

export interface IProfile {
  'id'?: string,
  'first'?: string,
  'lastname'?: string,
  'age'?: number,
  'currency'?: CurrencyT,
  'country'?: CountryT,
  'city'?: string,
  'username'?: string,
  'avatar'?: string
}

export interface IProfileSchema {
  data?: IProfile,
  form?: IProfile,
  isLoading?: boolean,
  error?: string,
  validateError?: ValidateProfileErrorT[],
  readonly: boolean
}
