import { readFile } from './read-file';

const importTextFileTxt = `12
23
43
54
66
`; // <-- EOF newline

test('should import file at the given path and return the text content with the default root dir', async () => {
  const result = await readFile('/libs/util-io/src/lib/fixtures/read-file.txt');

  expect(result).toEqual(importTextFileTxt);
});

test('should import file at the given path and return the text content with a custom root dir', async () => {
  const result = await readFile('/fixtures/read-file.txt', { root: __dirname });

  expect(result).toEqual(importTextFileTxt);
});
