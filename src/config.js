/**
 * Created by VICSOLWANG.
 * Date: 2021/12/18 20:39
 * Email: vic.sol.wang@gmail.com
 */

const baseConfig = require('eslint-config-wzx');

const reactConfig = ['airbnb/hooks', 'plugin:react/jsx-runtime'];
const reactRules = {
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
};

const handleExtendsConfig = (extendsConfig = []) => {
  const result = extendsConfig.map((item) =>
    item.indexOf('airbnb') !== -1 ? item.replace(/[-/]base/g, '') : item,
  );
  result.splice(result.length - 1, 0, ...reactConfig);
  return result;
};

const { overrides: defaultOverrides, ...defaultConfig } = baseConfig;
const config = {
  ...defaultConfig,
  extends: handleExtendsConfig(defaultConfig.extends),
  plugins: ['react'],
  rules: {
    ...defaultConfig.rules,
    ...reactRules,
  },
};

try {
  require('typescript');
  require('@typescript-eslint/parser');
  require('@typescript-eslint/eslint-plugin');
  config.overrides = [
    {
      ...defaultOverrides[0],
      extends: handleExtendsConfig(defaultOverrides[0].extends),
      plugins: ['react'],
      rules: {
        ...defaultOverrides[0].rules,
        ...reactRules,
      },
    },
  ];
} catch (err) {
  console.info(
    'Note: Typescript eslint needs to install typescript, @typescript-eslint/parser, @typescript-eslint/eslint-plugin.',
  );
}

module.exports = config;
