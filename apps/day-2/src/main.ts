import { processInput } from '@adventofcode-2021/util-io';
import { forward, depth } from './dive';

(async () => {
  const input = await processInput('assets/input.txt', {
    root: __dirname,
  });
  const forwardAmount = forward(input);
  const depthAmount = depth(input);

  const result = forwardAmount * depthAmount;

  console.log(result);
})();
