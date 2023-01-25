export const getUniqueObject = <T>(value: T[]): T[] => value.filter(onlyUnique);

export function onlyUnique(value: any, index: any, self: any[]) {
  return self.indexOf(self.find((t) => t.id === value.id)) === index;
}
