const path = require('path')
// const CopyPlugin = require('copy-webpack-plugin');

const config = {
  /* plugins: [
    new CopyPlugin([
      { from: '', to: '' }
    ])
  ]*/
  module: {
    rules: [
      /*{
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }*/
      /*{
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]'
          // outputPath: 'fonts/'
        }
      }*/
    ]
  },
  resolve: {
    alias: {
      Fonts: path.resolve(__dirname, 'src/assets/fonts')
    }
  }
}

module.exports = {
  configureWebpack: config
}
