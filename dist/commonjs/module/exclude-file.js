"use strict";
/**
 * Represents an excluded file.
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ExcludeFile {
    /**
     * Excludes a file from a list of excluded files based on matching patterns.
     *
     * @param {string[]} excludedFile - The array of excluded file paths.
     * @param {string} src - The file path to be checked for exclusion.
     *
     * @returns {string[]} The updated array of file paths after excluding the specified file.
     */
    static excludeFile(excludedFile, src) {
        const fileDependency = [];
        const isEmptyPath = excludedFile.length === 0;
        if (isEmptyPath)
            fileDependency.push(src);
        else {
            const matchWhiteSpaceEmptyString = /^$|\s+/;
            const isInvalidPath = (path) => matchWhiteSpaceEmptyString.test(path);
            excludedFile.forEach((file) => {
                if (isInvalidPath(file)) {
                    fileDependency.push(src);
                }
                else if (!file.match(src)) {
                    fileDependency.push(src);
                }
            });
        }
        return fileDependency;
    }
}
exports.default = ExcludeFile;
