import path from 'node:path';
import { compileSass } from '../module/compiler.js';

export default class ImportPath {
  public static importPath(
    rootPath: string,
    outputPath: string,
    ...arg: string[]
  ) {
    arg.forEach((file) => {
      const jointFilePath = path.join(rootPath, file);
      compileSass({ sourceFile: jointFilePath, outputDirectory: outputPath });
    });
  }
}

export const { importPath } = ImportPath;