// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/music-stats/'
      : '/',
  // configureWebpack: {
  //
  // }
};


// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist'
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       title: 'Output Management'
//     })
//   ],
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };
