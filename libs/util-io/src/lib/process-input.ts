import { parseArray, Parser } from './parse-array';
import { readFile } from './read-file';
import { Delimiter, split } from './split';

type Options<T> = {
  root: string;
  delimiter?: Delimiter;
  parser?: Parser<T>;
};

export const processInput = async <T = unknown>(
  filePath,
  options: Options<T>
) => {
  const { root, delimiter, parser } = options;
  return parseArray(split(await readFile(filePath, { root }), { delimiter }), {
    parser,
  });
};
