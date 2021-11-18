type Parser<T> = (input: string, index?: number) => T;

export const parseArray = <T>(input: string[], parser: Parser<T>) => {
  return input.map(parser);
};
