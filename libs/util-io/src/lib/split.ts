export type Delimiter = '\n' | ',';

export const split = (
  input: string,
  options: { delimiter: Delimiter } = { delimiter: '\n' }
) => {
  const { delimiter } = options;

  return input.split(delimiter);
};
