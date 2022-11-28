项目搭建
npx create-react-app xxx

npm run eject 暴露出webpack配置文件

npm i -D @craco/craco 安装自定义配置插件
```
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}

然后在项目根目录创建一个 craco.config.js 用于修改默认配置。

/* craco.config.js */
module.exports = {
  // ...
};
```

npm i -D craco-less@2.0.0 @craco/craco@5.5.0  安装指定版本的插件才能自定义主题
```
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
```