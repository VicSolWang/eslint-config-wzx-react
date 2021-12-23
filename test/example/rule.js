/**
 * Created by VICSOLWANG.
 * Date: 2021/12/23 23:24
 * Email: vic.sol.wang@gmail.com
 */

let a = 'eslint';

// 'global-require': 'warn'
if (a) {
  require('eslint');
}

// 'import/no-dynamic-require': 'warn'
require(a);

// 'no-bitwise': 'off'
a = 1 & 2;

// 'no-nested-ternary': 'off'
a = a < 1 ? 0 : a < 2 ? 1 : 2;

// 'no-script-url': 'warn'
a = 'javascript:void(0)';

// 'no-underscore-dangle': 'off'
const _b = () => {};
_b();
