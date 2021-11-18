import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { applicationGenerator } from '@nrwl/node';
import { paramCase } from 'change-case';

export default async function (tree: Tree, schema: any) {
  const { name, func } = schema;
  await applicationGenerator(tree, schema);

  const libraryRoot = readProjectConfiguration(tree, name).root;
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    { name, func, tmpl: '', 'func-kebab': paramCase(func) } // config object to replace variable in file templates,
  );

  tree
    .listChanges()
    .filter(({ path }) => {
      return path.includes('.gitkeep') || path.includes('environments');
    })
    .forEach(({ path }) => {
      tree.delete(path);
    });

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
