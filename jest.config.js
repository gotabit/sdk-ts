const { pathsToModuleNameMapper, transform } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

const pathsMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
})

// eslint-disable-next-line jest/require-hook
Object.keys(pathsMapper).forEach((key) => {
  if (typeof pathsMapper[key] !== 'string') return
  pathsMapper[key] = pathsMapper[key].replace('/*', '/src')
})

module.exports = {
  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'html'],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', '<rootDir>', 'src'],
  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  moduleNameMapper: {
    ...pathsMapper,
  },
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // The test environment that will be used for testing
  testEnvironment: 'node',
  transform: {
    ...transform,
    '\\.[jt]sx?$': 'ts-jest',
  },
}
