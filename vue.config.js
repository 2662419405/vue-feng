const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const cdn = {
  js: [
    'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    'https://cdn.jsdelivr.net/npm/ant-design-vue@1.6.0/dist/antd.min.js',
  ],
  css: ['https://cdn.jsdelivr.net/npm/ant-design-vue@1.6.0/dist/antd.min.css'],
}

module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals({
        vue: 'Vue',
        'ant-design-vue': 'antd',
      })
      config.plugin('analyzer').use(BundleAnalyzerPlugin, [
        {
          analyzerPort: 9500,
        },
      ])
      config.plugin('compress').use(CompressionWebpackPlugin, [
        {
          test: /\.js$|\.html$|\.css$/,
          threshold: 10240, // 超过10kb就压缩
          deleteOriginalAssets: false,
        },
      ])
      config.plugin('html').tap(args => {
        args[0].cdn = cdn
        return args
      })
    }
  },
}
