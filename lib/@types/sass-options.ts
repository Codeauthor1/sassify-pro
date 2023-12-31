import { Options } from 'sass';
import {
  SassifyProBrowserSyncOptions,
  SassifyProChokidarOptions,
} from '../utils/watch.js';

import { SassifyproAutoprefixerOption } from '../module/processor.js';

/**
 * Options for Sass compilation.
 */
export interface SassOptions
  extends Options<'async'>,
    SassifyProBrowserSyncOptions,
    SassifyProChokidarOptions,
    SassifyproAutoprefixerOption {
  /**
   * Specify the path to the Sass file that should be compiled.
   */
  sassFilePath?: string;

  /**
   * Specify the path where the compiled CSS file should be generated.
   */
  cssOutputPath?: string;

  /**
   * Specifies whether to enable autoprefixer for vendor prefixing.
   */
  autoprefixer?: boolean;

  /**
   * Regular expression to exclude paths from Sass compilation.
   */
  excludePaths?: RegExp;

  /**
   * Additional import paths to resolve Sass imports.
   */
  importPaths?: string[];

  baseDir?: string;

  /**
   * Specifies whether to watch for changes and recompile Sass files automatically.
   */
  // watch?: boolean;
}
