import { processInput } from '@adventofcode-2021/util-io';
import { sausageSum } from './sausageSum';

(async () => {
  const input = await processInput<number>('assets/input.txt', { root: __dirname, parser: Number });
  const result = sausageSum(input);

  console.log(result);
})();
