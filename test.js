/**
 * Created by VicSolWang.
 * Date: 2020-02-16 11:35
 * Email: vic.sol.wang@gmail.com
 */

const test = require('ava');
const { CLIEngine } = require('eslint');
const rule = require('./index');

const isObject = (obj) => typeof obj === 'object' && obj !== null;

const isArray = (array) => Array.isArray(array);

test('Test basic properties of config.', (t) => {
	t.true(isObject(rule.env));
	t.true(isObject(rule.globals));
	t.true(isObject(rule.parserOptions));
	t.true(isArray(rule.plugins));
	t.true(isObject(rule.rules));
});

test('Load config in eslint to validate all rule syntax is correct.', (t) => {
	const cli = new CLIEngine();
	const code = 'const foo = 1;\nconst bar = () => {};\nbar(foo);\n';
	t.is(cli.executeOnText(code).errorCount, 0);
});
