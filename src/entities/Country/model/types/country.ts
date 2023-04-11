export const Country = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine'
} as const;

export type CountryT = keyof typeof Country
