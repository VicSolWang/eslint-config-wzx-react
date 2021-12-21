# eslint-config-wzx-react

[![NPM version](https://img.shields.io/npm/v/eslint-config-wzx-react)](https://www.npmjs.com/package/eslint-config-wzx-react)
[![node](https://img.shields.io/node/v/eslint-config-wzx-react)](https://nodejs.org)
[![Build Status](https://travis-ci.com/VicSolWang/eslint-config-wzx-react.svg?branch=master)](https://travis-ci.com/VicSolWang/eslint-config-wzx-react)
[![codecov](https://codecov.io/gh/VicSolWang/eslint-config-wzx-react/branch/master/graph/badge.svg)](https://codecov.io/gh/VicSolWang/eslint-config-wzx-react)
[![NPM downloads](https://img.shields.io/npm/dt/eslint-config-wzx-react)](https://www.npmjs.com/package/eslint-config-wzx-react)

The custom react eslint rules based on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb). (Support Typescript Eslint)

# Installation

    npm install --save-dev eslint-config-wzx-react

Note: Typescript eslint needs to install [typescript](https://www.npmjs.com/package/typescript), [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser), [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).

    npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin

# Usage

Add eslint-config-wzx-react to the "extends" in your `.eslintrc.* file`.

    {
      "extends": "wzx-react"
    }

Note: Typescript eslint needs `tsconfig.json` in your project root directory.

# License

[MIT](LICENSE).
