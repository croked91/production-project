import { CountryT } from 'entities/Country';
import { CurrencyT } from 'entities/Currency';

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
