import { parseArray } from './parseArray';

test('should parse the values of the given array with the given parser function', () => {
  const result = parseArray(['1', '2', '3', '4', '5'], { parser: Number });
  expect(result).toEqual([1, 2, 3, 4, 5]);
});

test('should parse the values of the given array with a complex parser function', () => {
  const result = parseArray(['a', 'b', 'c', 'd'], {
    parser: (value: string, index: number) => ({ [value]: index }),
  });
  expect(result).toEqual([{ a: 0 }, { b: 1 }, { c: 2 }, { d: 3 }]);
});
