const path = require('path');

module.exports = {
  context: __dirname,
  mode: 'production',
  entry: './src/client/App.jsx',
  devtool: 'cheap-eval-source-map',
  performance: { hints: false },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
