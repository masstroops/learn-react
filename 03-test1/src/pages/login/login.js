import React, { Component, useState } from "react";
// react-redux在hook组件修改和获取store里数据的写法
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Navigate, Link } from 'react-router-dom'
import { notification } from 'antd'
import { http } from '../../utils/http'
import store from "../../store"
import './login.less'

const Test = (props) => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const changeName = (e) => {
    setName(e.target.value)
    setUser(e.target.value)
  }
  const goto = (e) => {
    if (e.key === 'Enter') navigate('/', {replace: true, state: {}})
  }

  let layout = useSelector(state => state.layout)
  let user = useSelector(state => state.user)
  let dispatch = useDispatch()
  const setUser = (name) => {
    dispatch({type: 'setuser', payload: {realname:name,}})
    console.log(user.userinfo)
  }
  return (
    <div>
      <div>布局：{layout}</div>
      <label>
        用户名：<input value={name} onInput={changeName} onKeyUp={goto}></input>
      </label>
      <div>用户名：{user.userinfo.realname}</div>
    </div>
  )
}

class Login extends Component {
  state = {
    isLogin: false
  }
  goto = async() => {
    await http('/login', 'POST').then(res => {
      if (res.success) {
        let token = res.data.tokenHead + res.data.token
        store.dispatch({ type: 'settoken', payload: token })
      }
    })
    await http('/user/info', 'GET').then(res => {
      if (res.success) {
        store.dispatch({ type: 'setuser', payload: res.data })
        notification[ 'success' ]({
          message: '欢迎',
          description: `${res.data.realname}，欢迎回来`,
          duration: 2
        })
      }
    })
    // loading.value = false
    this.setState({isLogin:true})
  }
  render() {
    return (
      <div className="main-page">
        <h1>登录页</h1>
        <Test />
        <button onClick={this.goto}>登录</button>
        {this.state.isLogin && <Navigate to='/' replace={true} />}
      </div>
    )
  }
}

export default Login