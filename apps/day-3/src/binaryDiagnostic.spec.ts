import {
  oxygenGenRating,
  co2ScrubberRating,
  lifeSupportRating,
} from './binaryDiagnostic';

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

  expect(result).toEqual(23);
});

test('should output co2 scrubber rating', () => {
  const result = co2ScrubberRating(input);

  expect(result).toEqual(10);
});

test('should output life support rating', () => {
  const result = lifeSupportRating(input);

  expect(result).toEqual(230);
});
