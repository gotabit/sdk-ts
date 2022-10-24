const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'dist', 'cjs', 'index.js'),
  },
  resolve: {
    fallback: {
      stream: false,
      buffer: false,
      path: false,
      crypto: false,
      assert: false,
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'umd'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'GotaBitMessages',
    umdNamedDefine: true,
    globalObject: 'this',
  },
}
