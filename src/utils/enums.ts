export const getEnumKey = <T extends { [index: string]: string | number }>(
  enumObj: T,
  value: string | number,
): keyof T | undefined =>
  Object.keys(enumObj).find(key => enumObj[key] === value) as keyof T | undefined

export const enumKeys = <O extends object, K extends keyof O = keyof O>(enumType: O): K[] =>
  Object.keys(enumType).filter(k => Number.isNaN(+k)) as K[]
