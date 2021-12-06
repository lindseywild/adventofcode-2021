import { oxygenGenRating } from './binaryDiagnostic';

const input = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

test('should output oxygen generator rating', () => {
  const result = oxygenGenRating(input);

  expect(result).toEqual('10111');
});
