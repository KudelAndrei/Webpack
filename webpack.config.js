const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  sourse: path.join(__dirname, 'sourse'), //путь от куда будут браться файлы
  build: path.join(__dirname, 'build') //путь куда будут билдиться проект
};

module.exports = {
  entry: PATHS.sourse + '/index.js',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app'
    })
  ]
};