import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const customResolver = resolve({
  extensions,
});
const projectRootDir = path.resolve(__dirname);

export default {
  input: "./src/index.ts",

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ["react", "styled-components", "ramda", "ui-box"],

  plugins: [
    alias({
      entries: [
        {
          find: "~",
          replacement: path.resolve(projectRootDir, "src"),
        },
      ],
      customResolver,
    }),

    // Allows node_modules resolution
    resolve({ extensions }),

    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      babelHelpers: "bundled",
      include: ["src/**/*"],
    }),
  ],

  output: [
    {
      file: pkg.main,
      format: "es",
    },
  ],
};
