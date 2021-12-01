import { processInput } from '@adventofcode-2021/util-io';
import { sonarSweep, threeWindowSums } from './sonarSweep';

(async () => {
  const input = await processInput<number>('assets/input.txt', {
    root: __dirname,
    parser: Number,
  });
  const result = sonarSweep(input);
  const threeWindows = threeWindowSums(input);
  const result2 = sonarSweep(threeWindows);

  console.log('result', result);
  console.log('result2', result2);
})();
