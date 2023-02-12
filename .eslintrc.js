module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	overrides: [],
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		indent: [2, 'tab'],
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] }
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'no-tabs': 'off',
		'comma-dangle': ['error', 'never'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-body-style': ['error', 'as-needed'],
		'jsx-quotes': ['error', 'prefer-single'],
		'implicit-arrow-linebreak': ['error', 'beside']
	},
	globals: {
		__IS_DEV__: true
	}
};
