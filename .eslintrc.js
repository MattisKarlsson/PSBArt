module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
	},
	plugins: ["react"],
	rules: {},
};
