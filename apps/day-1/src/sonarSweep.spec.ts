import { sonarSweep } from './sonarSweep';

test('should output number of larger than previos values', () => {
  const input = [199, 227, 229, 230, 233, 228, 231];
  const result = sonarSweep(input);

  expect(result).toEqual(5);
});
