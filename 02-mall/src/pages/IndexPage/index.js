import React, { Component, useState } from 'react'
import { Link, BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink';
import styles from './index.module.scss'
import qs from 'querystring'
import Header from './Header';

// const obj = {name: 'cb', love: 'qq'}
// const str = qs.stringify(obj)
// console.log(obj, qs.parsea(str));

class IndexPage extends Component {
  render() {
    return (
      <div>
        <h3>IndexPage</h3>
        <BrowserRouter>
        <Header />
        <div className={styles.row}>
          <div className={styles.col1}>
            {/* 编写路由链接 */}
            {/* <Link to="/about" className={styles.link}>About</Link>
            <Link to="/home" className={styles.link}>Home</Link> */}
            {/* 选中高亮效果的路由链接 */}
            {/* <NavLink activeClassName={styles.active} to="/about" className={styles.link}>About</NavLink>
            <NavLink activeClassName={styles.active} to="/home" className={styles.link}>Home</NavLink> */}
            <MyNavLink to='/about'>About</MyNavLink>
            <MyNavLink to='/home'>Home</MyNavLink>
          </div>
          <div className={styles.col2}>
            {/* 注册路由 */}
            <Switch>
              {/* exact严格匹配路由，例如Link内/home/a，Route内/home，这种情况模糊匹配能通过严格匹配不通过 */}
              <Route exact={true} path='/about' component={About} />
              <Route path='/home' component={Home} />
              {/* <Redirect to='/about' /> */}
            </Switch>
          </div>
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

function Home(props) {
  console.log('Home组件props：',props);
  return <div className={styles.home}>
    Home Component
    <div className={styles.flex}>
      <NavLink activeClassName={styles.active} to="/home/news" className={styles.link}>News</NavLink>
      <NavLink activeClassName={styles.active} to="/home/message" className={styles.link}>Message</NavLink>
    </div>
    <div className={styles.content}>
      <Switch>
        <Route path="/home/news" component={HomeNews} />
        <Route path="/home/message" component={HomeMessage} />
        <Redirect to="/home/news" />
      </Switch>
    </div>
  </div>
}

function About(props) {
  return <div>
    About Component
  </div>
}

// 二级
function HomeNews(props) {
  return <div>
    HomeNews Component
  </div>
}
function HomeMessage(props) {
  let msg = [
    {id: '01', title: '消息1'},
    {id: '02', title: '消息2'},
    {id: '03', title: '消息3'},
  ]
  let [message, setMessage] = useState(msg)
  let replaceShow = (id, title) => {
    // replace跳转
    props.history.replace(`/home/message/detail/${id}/${title}`)
    // props.history.replace(`/home/message/detail/?id=${id}&title=${title}`) // search传参
    // props.history.replace(`/home/message/detail`, {id, title}) // state传参
  }
  let pushShow = (id, title) => {
    // push跳转
    props.history.push(`/home/message/detail/${id}/${title}`)
  }
  let back = () => {
    props.history.goBack()
  }
  let forward = () => {
    props.history.goForward()
  }
  let go = () => {
    props.history.go(2)
  }
  return <div>
    HomeMessage Component
    <ul>
      {
        message.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/* 向路由组件传递params参数 */}
              <Link to={"/home/message/detail/"+msgObj.id+'/'+msgObj.title}>{msgObj.title}</Link>
              {/* 向路由组件传递search参数 */}
              {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
              {/* 向路由组件传递state参数 */}
              {/* <Link to={{pathname: '/home/message/detail', state: {id: msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link> */}
              &nbsp;<button onClick={() => pushShow(msgObj.id, msgObj.title)}>push查看</button>
              &nbsp;<button onClick={() => replaceShow(msgObj.id, msgObj.title)}>replace查看</button>
            </li>
          )
        })
      }
    </ul>
    <hr />
    {/* 声明接收params参数 */}
    <Route path="/home/message/detail/:id/:title" component={HomeMessageDetail} />
    {/* search参数无需声明接收，正常注册路由即可 */}
    {/* <Route path="/home/message/detail" component={HomeMessageDetail} /> */}
    {/* state参数无需声明接收，正常注册路由即可 */}
    {/* <Route path="/home/message/detail" component={HomeMessageDetail} /> */}

    <button onClick={back}>回退</button>
    <button onClick={forward}>前进</button>
    <button onClick={go}>go2</button>
  </div>
}

// 三级
function HomeMessageDetail(props) {
  console.log(props);
  // 接收路由params参数
  const {id, title} = props.match.params
  // 接收search参数
  // const {search} = props.location
  // const {id,title} = qs.parse(search.slice(1))
  // 接收search参数
  // const {id,title} = props.location.state || {}
  const data = [
    {id: '01', content: '你好,中国'},
    {id: '02', content: '你好,未来的自己'},
    {id: '03', content: '你好,清清'},
  ]
  const findResult = data.find((detail) => {
    return detail.id === id
  }) || {}
  return <ul>
    <li>ID：{id}</li>
    <li>title：{title}</li>
    <li>content：{findResult.content}</li>
  </ul>
}

export default IndexPage