module.exports = {
  bail: 1,
  verbose: true,
  rootDir: '.',
  collectCoverage: true,
  coverageDirectory: './coverage',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(mjs?|mts?|jsx?|js?|tsx?|ts?)$',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx', 'mjs', 'cjs'],
  transformIgnorePatterns: [
    '/node_modules\\/(?!shinkansen-sprockets)\\/',
    '/node_modules\\/(?!shinkansen-cogs)\\/'
  ]
}
