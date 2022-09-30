import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// BroserRouter原理是利用浏览器history监听路由变化
// HashRouter会url上会有#，并且#后边的url会认为是前端资源不会发送到服务器，hash路由原理是锚点跳转
import './index.css';
import App from './App';
import './static/iconfont/iconfont.css'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/**
 * 一、路由的基本使用
 * 1、明确号界面中的导航区、展示区
 * 2、导航区的a标签改为Link标签<Link to="/xxx">xxx<Llik>
 * 3、展示区写Route标签进行路径的匹配<Route path="/xxx" component={Demo} />
 * 4、<App>的最外侧报过了一个<BrowserRouter>或<HashRouter>
 * 二、路由组件和一般组件
 * 1、写法不同：一般组件<Demo />，路由组件<Route path="/demo" component={Demo}/>
 * 2、接收到的props不同：一般组件写组件标签是传递了什么就能接收到什么，路由组件接收到3个固定的属性
 * history:
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    location: {pathname: '/home', search: '', hash: '', state: undefined, key: '4bdjr5'}
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
  location:
    pathname: "/home"
    search: ""
    state: undefined
  match:
    isExact: true
    params: {}
    path: "/home"
    url: "/home"
 * 
 * 三、NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
 * 四、Switch的使用
 * 1、通常情况下，path和component是一一对应的冠以
 * 2、Switch可以提高路由匹配的效率
 * 五、解决多级页面刷新index.html页面内标签引入的样式丢失问题
 * 1、public/index.html中引入样式时不写 ./ 写 /
 * 2、public/index.html中引入样式时不写 ./ 写 %PUBLIC_URL%
 * 3、使用HashRouter
 * 六、路由的严格匹配和模糊匹配
 * 1、默认使用的是模糊匹配
 * 2、开启严格匹配：<Route exact={true} path="/home" component={Home} />
 * 3、严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
 * 1、params参数
 *    路由链接（携带参数）：<Link to='/demo/test/tom/18'>详情</Link>
 *    注册路由（声明接收）：<Route path='/demo/test/:name/:age' component={Test} />
 *    接收参数：const {name,age} = this.props.match.params
 * 2、search参数
 *    路由链接（携带参数）：<Link to='/demo/test?name=tom&age=18'>详情</Link>
 *    注册路由（无需声明，正常注册即可）：<Route path='/demo/test' component={Test} />
 *    接收参数：this.props.location.search，注意渠道的search是urlencoded编码字符串，需要借助querystring解析
 * 3、state参数
 *    路由链接（携带参数）：<Link to={{pathname: '/demo/test', state: {name: 'tom', age: 18}}}>详情</Link>
 *    注册路由（声明接收）：<Route path='/demo/test' component={Test} />
 *    接收参数：this.props.location.state，刷新也可以保留参数
 * 七、replace模式 <Link replace={true} to='/demo' component={Demo}>demo</Link>
 * 八、编程式路由导航
 *    借助this.props.history对象上的API对操作路由跳转、前进、后退
 *        this.props.history.push(`/demo/${id}`) params传参
 *        this.props.history.replace('/demo', {id:id}) state传参
 *        this.props.history.goBack()
 *        this.props.history.goForward()
 *        this.props.history.go()
 * 九、withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
 * 十、BrowserRouter与HashRouter的区别
 * 1、底层原理不一样：
 *    BrowserRouter使用的是H5的history API,不兼容IE9及以下版本。
 *    HashRouter使用的是URL的哈希值。
 * 2、path表现形式不一样，BrowserRouter路径中不带#，HashRouter路径中带#
 * 3、刷新后对路由state参数的影响，BrowserRouter没影响，会将state保存在history对象，HashRouter刷新后会导致路由state参数丢失
 * 4、HashRouter可以用于解决一些路径错误相关的问题
 */