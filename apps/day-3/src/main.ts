import { processInput } from '@adventofcode-2021/util-io';
import { binaryDiagnostic } from './binaryDiagnostic';

(async () => {
  const input = await processInput('assets/input.txt', { root: __dirname });
  const result = binaryDiagnostic(input);

  console.log(result);
})();
