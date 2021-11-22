import { processInput } from '@adventofcode-2021/util-io';
import { hotdogs } from './hotdogs';

(async () => {
  const input = await processInput('assets/input.txt', { root: __dirname });
  const result = hotdogs(input);

  console.log(result);
})();
