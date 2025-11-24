import js from "@eslint/js";
import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  { files: ["task-7/paragagraphs.js"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } }, [globalIgnores(["coverage/*"])]
]);
