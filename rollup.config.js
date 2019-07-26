import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/Component.ts",
  output: {
    file: "dist/markdown-component.js",
    format: "esm"
  },
  plugins: [typescript()]
};
