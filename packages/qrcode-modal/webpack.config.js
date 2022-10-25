const path = require('path')
const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'umd'),
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'GotabitQRCodeModal',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
        ],
      },
    ],
  },
}
