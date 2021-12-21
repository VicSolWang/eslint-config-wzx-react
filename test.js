/**
 * Created by VICSOLWANG.
 * Date: 2020/02/16 11:35
 * Email: vic.sol.wang@gmail.com
 */

const test = require('ava');
const { ESLint } = require('eslint');
const config = require('./index');

const isObject = (obj) => typeof obj === 'object' && obj !== null;
const isArray = (array) => Array.isArray(array);

test('Test basic properties of config.', (t) => {
  t.true(isArray(config.extends) && config.extends.indexOf('airbnb') !== -1);
  t.true(isArray(config.plugins));
  t.true(isObject(config.rules));
  if (config.overrides && config.overrides.length > 0) {
    const overrideConfig = config.overrides[0] || {};
    t.true(
      isArray(overrideConfig.extends) &&
        config.extends.indexOf('airbnb') !== -1 &&
        overrideConfig.extends.indexOf('airbnb-typescript/base') !== -1,
    );
    t.true(
      isObject(overrideConfig.parserOptions) &&
        overrideConfig.parserOptions.project,
    );
    t.true(isArray(overrideConfig.plugins));
    t.true(isObject(overrideConfig.rules));
  }
});

test('Load config in eslint to validate all rule syntax is correct.', async (t) => {
  const eslint = new ESLint();
  const code = 'const a = 1;\nconst b = () => {};\nb(a);\n';
  const results = await eslint.lintText(code);
  t.is(((results || [])[0] || {}).errorCount, 0);
});
