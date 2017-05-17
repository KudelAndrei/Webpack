const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const extractCSS = require("../webpack/css/exports");

const PATHS = {
  sourse: path.join(__dirname, 'sourse'), //путь от куда будут браться файлы
  build: path.join(__dirname, 'build') //путь куда будут билдиться проект
};

const common = ([
  {
    entry: PATHS.sourse + '/index.js',
    output: {
      path: PATHS.build,
      filename: 'js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack app'
      })
    ]
  }
  //pug()
]);


module.exports = function(env) {
  if (env === 'production'){
    return merge([
       common,
       extractCSS()
    ])
  }
  if (env === 'development'){
    return merge([
      common,
      devserver(),
      sass()
    ])
  }
};
