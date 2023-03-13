export const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR'
} as const;

export type CurrencyT = keyof typeof Currency

export const Country = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine'
} as const;

export type CountryT = keyof typeof Country
