import { processInput } from '@adventofcode-2021/util-io';
import { binaryDiagnostic, lifeSupportRating } from './binaryDiagnostic';

(async () => {
  const input = await processInput('assets/input.txt', { root: __dirname });
  const result = binaryDiagnostic(input);
  const result2 = lifeSupportRating(input);

  console.log('result', result);
  console.log('result2', result2);
})();
