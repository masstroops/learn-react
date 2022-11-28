const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' }, // 这里利用了 less-loader 的 modifyVars 来进行主题配置
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}