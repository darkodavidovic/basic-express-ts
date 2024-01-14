// Configure rules (0 = off, 1 = warn, 2 = error)
// https://eslint.org/docs/user-guide/configuring#configuring-rules

const WARNING = 'warn'
const ERROR = 'error'
const OFF = 'off'

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	env: {
		es2020: true,
		node: true,
	},
	ignorePatterns: ['node_modules', 'apps', 'opcua/public', 'todo'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:security/recommended',
		// 'standard'
		'plugin:editorconfig/all'
	],
	plugins: [
		'@typescript-eslint',
		'promise',
		'only-warn',
		'editorconfig'
	],
	rules: {
		'no-var': ERROR,
		'prefer-const': ERROR,
		'quote-props': [ERROR, 'as-needed'],
		'object-shorthand': [ERROR, 'always'],
		'max-nested-callbacks': [WARNING, 3],
		'comma-dangle': [
			OFF,
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				functions: 'never',
			},
		],
		'max-lines-per-function': [WARNING, 100],
		'space-before-function-paren': [
			ERROR,
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'prefer-arrow-callback': ERROR,
		'prefer-template': WARNING,
		'no-useless-concat': WARNING,
		semi: [OFF, 'always'],
		camelcase: OFF,
		'no-param-reassign': [WARNING, { props: true }],
		'operator-linebreak': [WARNING, 'before'],
		eqeqeq: OFF,
		curly: OFF,
		'prefer-promise-reject-errors': ERROR,
		'no-sync': ERROR,
		'promise/always-return': ERROR,
		'promise/no-return-wrap': ERROR,
		'promise/param-names': ERROR,
		'promise/catch-or-return': ERROR,
		'promise/no-native': 'off',
		'promise/no-nesting': WARNING,
		'promise/no-promise-in-callback': WARNING,
		'promise/no-callback-in-promise': WARNING,
		'promise/avoid-new': WARNING,
		'promise/no-new-statics': ERROR,
		'promise/no-return-in-finally': WARNING,
		'promise/valid-params': WARNING,
		// 'max-depth': [1, 6],
		// 'max-nested-callbacks': [1, 5],
		// complexity: [1, 3],
		// 'no-magic-numbers': 1,
		// 'promise/prefer-await-to-callbacks': ERROR,
		// 'promise/prefer-await-to-then': ERROR,
	},
}
