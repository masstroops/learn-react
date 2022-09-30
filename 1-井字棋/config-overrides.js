// 在不用npm eject命令暴露webpack配置文件时，只能用customize-cra增加webpack配置
//根⽬录创建config-overrides.js, 修改默认配置
const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require("customize-cra");

// "scripts": {
//  "start": "react-app-rewired start",
//  "build": "react-app-rewired build",
//  "test": "react-app-rewired test",
//  "eject": "react-app-rewired eject"
//  },

module.exports = override(
  fixBabelImports("import", { //antd按需加载
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
    // 引入样式为 css
    // style为true 则默认引入less
  }),
  // ⾃定义主题
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: {"@primary-color": "red"}
  // })
  addDecoratorsLegacy()
);