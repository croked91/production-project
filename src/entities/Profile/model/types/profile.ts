import { CountryT, CurrencyT } from 'shared/const/common';

export interface IProfile {
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
  readonly: boolean
}
