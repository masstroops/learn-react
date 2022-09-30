import React, { Component } from 'react'

// hoc
// 是个函数，参数是组件，返回值是新的组件
const foo = Cmp => props => { // 返回一个可传入props的组件
  return (
    <div className='hocborder'>
      <Cmp {...props} omg="omg" />
    </div>
  )
}
function Child(props) {
  return <div>Child</div>
}

// 创建高阶组件
const Foo = foo(Child)
// const Foo = foo(foo(Child)) 可以链式






// 装饰器写法，利用装饰器可以更简单的使用高阶组件，但需要配置环境支持装饰器
/**
 * yarn add @babel/plugin-proposal-decorators
 * 并且装饰器作为实验性语法或出现项目报错，需要在根目录下创建jsconfig.json文件并写入，如果是ts项目则创建tsconfig.json
  {
    "compilerOptions": {
      "experimentalDecorators": true
    },
    "javascript.implicitProjectConfig.experimentalDecorators": true
  }
 * ----------------------------------
 * 根目录下创建webpack配置文件
 * const { addDecoratorsLegacy } = require('customize-cra')
 * module.exports = override(
 *  ...,
 *  addDecoratorsLegacy() // 配置装饰器
 * )
 * ------------------------------------
 * 或者在package.json文件里直接为babel添加配置项
 * "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ],
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ]
    ]
  }
 */
// @foo //装饰器写法也可以链式，顺序从下至上
@foo
class ClassChild extends Component {
  render() {
    return <div>ClassChild</div>
  }
}

class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>高阶组件hoc</h3>
        <Foo />
        <ClassChild />
      </div>
    )
  }
}

export default HocPage