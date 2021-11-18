import { split } from './split';

const importTextFileTxt = `12
23
43
54
66`;

test('should split the given input into an array by the default delimiter of "\\n"', () => {
  const result = split(importTextFileTxt);

  expect(result).toEqual(['12', '23', '43', '54', '66']);
});

test('should split the given input by a specific delimiter', () => {
  const result = split('1,2,3,4,5', { delimiter: ',' });
  const result2 = split('1,2,3,4,5', { delimiter: '\n' });
  expect(result).toEqual(['1', '2', '3', '4', '5']);
  expect(result2).toEqual(['1,2,3,4,5']);
});
