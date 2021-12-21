/**
 * Created by VICSOLWANG.
 * Date: 2021/12/18 20:39
 * Email: vic.sol.wang@gmail.com
 */

const customRules = {
  'global-require': 'warn',
  'import/no-dynamic-require': 'warn',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  'no-bitwise': 'off',
  'no-nested-ternary': 'off',
  'no-script-url': 'warn',
  'no-underscore-dangle': 'off',
};

const config = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'prettier'],
  plugins: ['react'],
  rules: customRules,
};

try {
  require('typescript');
  require('@typescript-eslint/parser');
  require('@typescript-eslint/eslint-plugin');
  config.overrides = [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
        'prettier',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['react'],
      rules: customRules,
    },
  ];
} catch (err) {
  console.info(
    'Note: Typescript eslint needs to install typescript, @typescript-eslint/parser, @typescript-eslint/eslint-plugin.',
  );
}

module.exports = config;
