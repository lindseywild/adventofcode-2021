import { hotdogs } from './hotdogs';

test('should add all together as numbers', async () => {
  const input = ['1', '2', '7'];
  const result = hotdogs(input);

  expect(result).toEqual(10);
});
