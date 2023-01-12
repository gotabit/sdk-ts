const { pathsToModuleNameMapper, transform } = require('ts-jest');
const { compilerOptions } = require('../../tsconfig');
const baseConfig = require('../../jest.config.js');

const pathsMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/../..',
});

// eslint-disable-next-line jest/require-hook
Object.keys(pathsMapper).forEach((key) => {
  if (typeof pathsMapper[key] !== 'string') return;
  pathsMapper[key] = pathsMapper[key].replace('/*', '/src');
  console.log(pathsMapper[key]);
});
module.exports = {
  ...baseConfig,
  moduleNameMapper: {
    ...pathsMapper,
  },
};
