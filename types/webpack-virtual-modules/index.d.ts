import webpack = require("webpack");

/**
 * Plugin that allows dynamic generation of in-memory virtual modules for JavaScript builds
 * created with webpack.
 */
declare class VirtualModulesPlugin {
    constructor(modules?: Record<string, string>);

    /**
     * Attaches necessary hooks, in particular, `afterEnvironment`, `afterResolvers`, and `watchRun` hooks,
     * to ensure that the virtual files are added dynamically.
     */
    apply(compiler: webpack.Compiler): void;

    /**
     * Writes a static or dynamic virtual module to a path.
     */
    writeModule(filePath: string, fileContents: string): void;
}

export = VirtualModulesPlugin;
