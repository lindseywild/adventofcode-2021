import { readFile as fsReadFile } from 'fs/promises';
import { join } from 'path';

export const readFile = (
  path: string,
  options: { root: string } = { root: process.cwd() }
) => {
  return fsReadFile(join(options.root, path), { encoding: 'utf-8' });
};
