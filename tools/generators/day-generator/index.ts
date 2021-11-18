import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  updateJson,
} from '@nrwl/devkit';
import { applicationGenerator } from '@nrwl/node';

export default async function (tree: Tree, schema: any) {
  const { name, func } = schema;
  await applicationGenerator(tree, schema);

  const libraryRoot = readProjectConfiguration(tree, name).root;
  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to the file templates
    libraryRoot, // destination path of the files
    { name, func, tmpl: '' } // config object to replace variable in file templates,
  );

  // Remove extra files from node app generator
  tree
    .listChanges()
    .filter(({ path }) => {
      return path.includes('.gitkeep') || path.includes('environments');
    })
    .forEach(({ path }) => {
      tree.delete(path);
    });

  // Update project.json
  updateJson(tree, `apps/${name}/project.json`, (projJson) => {
    projJson.targets.build.configurations = undefined;
    return projJson;
  });

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
