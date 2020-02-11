/**
 * Created by VicSolWang.
 * Date: 2020-02-11 9:11
 * Email: vic.sol.wang@gmail.com
 */

module.exports = {
	extends: ['eslint-config-wzx', 'eslint-config-airbnb'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['babel', 'import', 'jsx-a11y', 'react'],
	rules: {
		'global-require': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: true,
			},
		],
		'jsx-a11y/anchor-is-valid': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'no-bitwise': 'off',
		'no-nested-ternary': 'off',
		'no-param-reassign': 'off',
		'no-restricted-syntax': ['error', 'BinaryExpression[operator="in"]'],
		'no-script-url': 'off',
		'react/forbid-prop-types': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'react/no-array-index-key': 'off',
		'react/no-did-update-set-state': 'off',
		'react/static-property-placement': ['error', 'static public field'],
	},
};
