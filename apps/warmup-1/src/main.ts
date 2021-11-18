import { processInput } from '@adventofcode-2021/util-io';
import { sausageSum } from './sausage-sum';

(async () => {
  const input = await processInput('assets/input.txt', { root: __dirname });
  const result = sausageSum(input);

  console.log(result);
})();
