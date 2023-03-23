export type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  aditional: Array<string | undefined> = ['']
): string => [
  cls,
  ...aditional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className, value]) => className)
].join(' ');
