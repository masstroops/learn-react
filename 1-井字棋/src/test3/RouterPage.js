import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
/**
 * react-router包含3个库，react-router、react-router-dom和react-router-native>
 * react-router提供最基本的路由功能，实际使用的时候我们不会直接安装react-router，
 * 而是根据应用运行的环境选择安装react-router-dom（在浏览器中使用）或react-router-native（在rn中使用）。
 * react-router-dom和react-router-native都依赖react-router，所以在安装时，react-router也会自动安装。
 */
import LearnSetstate from './正确使用setState'
import ReduxPage from "./redux";

export default class RouterPage extends React.Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          
          {/* 6.0开始Route 需要在 Routes 里，组件为 element,注意括号内为标签 */}
          {/* react-router-domV6嵌套路由实现详解 https://www.jb51.net/article/271694.htm */}
          <Routes>
            <Route exact={false} path="/" element={<LearnSetstate />} />
            <Route exact={false} path="/user" element={<ReduxPage />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>

          {/* 6.0之前写法 exact表示精确匹配 */}
          {/* <switch> */}
          {/* <Route exact path="/" component={LearnSetstate} /> */}
          {/* <Route component={<div>404</div>} /> */}
          {/* </switch> */}

          {/* Route有3中渲染方式：children、component、render，优先级：children > component > render */}
          {/* children：function，component：component，render：function */}
          {/* <Route path="/" children={() => <div>children</div>} component={<div>component</div>} render={() => <div>render</div>} /> */}
        </Router>
      </div>
    )
  }
}
