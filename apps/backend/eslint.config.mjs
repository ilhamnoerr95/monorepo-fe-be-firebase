import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ["**/*.{js,mjs,cjs,ts}"] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "error",
			"no-console": "off",
			"no-trailing-spaces": "warn",
			"no-multi-spaces": "warn",
			"no-var": "error",
			"no-shadow": "error",
			"no-empty": "error",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-require-imports": "off",
		},
	},
];
