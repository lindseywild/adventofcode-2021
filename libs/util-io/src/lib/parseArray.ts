export type Parser<T> = (input: string, index?: number) => T;

export const parseArray = <T>(
  input: string[],
  options: { parser: Parser<T> }
) => {
  return input.map(options.parser);
};
