import { processInput } from './process-input';

test('should import a txt file, split, and parse', async () => {
  const result = await processInput<number>('fixtures/input.txt', {
    root: __dirname,
    parser: Number,
  });
  expect(result).toEqual([12, 23, 43, 54, 66]);
});
