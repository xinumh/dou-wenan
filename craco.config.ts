const path = require('path')
const { when, whenDev, whenProd } = require('@craco/craco')
const CracoLessPlugin = require('craco-less')
const WebpackBar = require('webpackbar')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// 判断编译环境是否为生产
const isBuildAnalyzer = process.env.BUILD_ANALYZER === 'true'

module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    },
    plugins: [
      new WebpackBar({
        profile: true,
        color: '#fa8c16'
      }),
      ...whenDev(
        () => [
          new CircularDependencyPlugin({
            exclude: /node_modules/,
            include: /src/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd()
          })
        ],
        []
      ),
      ...when(isBuildAnalyzer, () => [new BundleAnalyzerPlugin()], []),
      ...whenProd(
        () => [
          new CompressionWebpackPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|html|svg|jpg|png|json)$/,
            threshold: 1024,
            minRatio: 0.8
          })
        ],
        []
      )
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            // globalVars: {
            //   hack: `true; @import '~@/style/theme.less';`
            // },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  babel: {
    // 装饰器。
    plugins: [
      // 实现按需引入
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
    ]
  }
}
