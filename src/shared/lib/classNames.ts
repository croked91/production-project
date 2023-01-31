type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods,
  aditional: string[]
): string => {
  return [
    cls,
    ...aditional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
};
