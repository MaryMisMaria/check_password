export default [
	{
		files: ["**/*.js", "**/*.jsx"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module"
		},
		rules: {
			"no-unused-vars": "warn",
			"react/react-in-jsx-scope": "off"
		}
	}
];
