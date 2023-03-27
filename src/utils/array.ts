export const first = <T>(array?: Array<T>) => (array ? array[0] : undefined);

export function keyBy<T>(array: Array<T>, by: keyof T): Record<string, T> {
  return array.reduce((prev, current) => {
    return { ...prev, [current[by] as string]: current };
  }, {});
}
