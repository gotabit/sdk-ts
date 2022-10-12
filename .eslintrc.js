const { resolve } = require('path')
const { readdirSync, lstatSync } = require('fs')

const PACKAGE_DIR = 'packages/' // this could be replaced utilizing the globs in package.json's "workpackges" or from the lerna.json config

// get files in packages
const noExtraneousOverrides = readdirSync(resolve(__dirname, PACKAGE_DIR))
  // filter for non-hidden dirs to get a list of packages
  .filter(
    (entry) =>
      entry.substr(0, 1) !== '.' &&
      lstatSync(resolve(__dirname, PACKAGE_DIR, entry)).isDirectory(),
  )
  // map to override rules pointing to local and root package.json for rule
  .map((entry) => ({
    files: [`${PACKAGE_DIR}${entry}/**/*`],
    rules: {
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: false,
          packageDir: [__dirname, resolve(__dirname, PACKAGE_DIR, entry)],
        },
      ],
    },
  }))

const common = {
  env: {
    node: true,
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  plugins: ['prettier', 'jest'],
  extends: ['airbnb-base', 'prettier', 'plugin:jest/all'],
  rules: {
    'prettier/prettier': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/expect-expect': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/no-test-return-statement': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '@gotabit/proto',
          '@gotabit/provider',
          '@gotabit/transactions',
        ],
      },
    ],
    'no-console': 'off',
    'no-iterator': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
  },
}

module.exports = {
  root: true,
  overrides: [
    {
      /*
      eslint-plugin-markdown only finds javascript code block snippet.
      For specific spec, refer to https://github.com/eslint/eslint-plugin-markdown
      */
      files: ['**/*.js', '**/*.md'],
      ...common,
    },
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      env: common.env,
      plugins: [...common.plugins, '@typescript-eslint'],
      extends: [
        ...common.extends,
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      rules: {
        ...common.rules,
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
    ...noExtraneousOverrides,
  ],
}
