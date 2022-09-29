const path = require('path');
const CopyFilePlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,
  
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: "main.js"
    },

    mode: "development",
    plugins: [
      new CopyFilePlugin(
        {
            patterns: [
              { from:"public" , to:"./"}
            ]
        },
      )
    ],


    devServer: {
        static: "dist",
        open: true,
    },
  };