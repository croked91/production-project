export const Currency = {
  RUB: 'RUB',
  USD: 'USD',
  EUR: 'EUR'
} as const;

export type CurrencyT = keyof typeof Currency
