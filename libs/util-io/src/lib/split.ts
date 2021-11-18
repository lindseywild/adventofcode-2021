export type Delimiter = '\n' | ',';

export const split = (input: string, options?: { delimiter: Delimiter }) => {
  const { delimiter = '\n' } = options || {};

  return input.split(delimiter);
};
