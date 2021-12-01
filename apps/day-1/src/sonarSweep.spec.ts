import { sonarSweep, threeWindowSums } from './sonarSweep';

test('should output number of larger than previos values', () => {
  const input = [199, 227, 229, 230, 233, 228, 231];
  const result = sonarSweep(input);

  expect(result).toEqual(5);
});

test('should only calculate values for groups of 3', () => {
  const input = [2, 3, 4, 2, 5, 4, 3];
  const result = threeWindowSums(input);

  expect(result.length).toEqual(5);
});

test('should calculate the sums of sliding groups of 3 values', () => {
  const input = [2, 3, 4, 2, 5, 4, 3];
  const result = threeWindowSums(input);

  expect(result).toEqual([9, 9, 11, 11, 12]);
});
