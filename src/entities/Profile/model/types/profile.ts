import { CurrencyT } from 'shared/const/common';
import { CountryT } from '../../../../shared/const/common';

export interface IProfile {
  'first': string,
  'lastname': string,
  'age': number,
  'currency': CurrencyT,
  'country': CountryT,
  'city': string,
  'username': string,
  'avatar': string
}

export interface IProfileSchema {
  data?: IProfile,
  isLoading?: boolean,
  error?: string,
  readonly: boolean
}
