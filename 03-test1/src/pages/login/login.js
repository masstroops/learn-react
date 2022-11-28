import React, { Component, useState } from "react";
// react-redux在hook组件修改和获取store里数据的写法
import { useSelector, useDispatch } from 'react-redux'
import './login.less'

const Test = (props) => {
  const [name, setName] = useState('')
  const changeName = (e) => {
    setName(e.target.value)
    setUser(e.target.value)
  }

  let layout = useSelector(state => state.layout)
  let user = useSelector(state => state.user)
  let dispatch = useDispatch()
  const setUser = (name) => {
    dispatch({type: 'setuser', info: {name,}})
  }
  return (
    <div>
      <div>布局：{layout}</div>
      <label>
        用户名：<input value={name} onChange={changeName}></input>
      </label>
      <div>{user.name}</div>
    </div>
  )
}

class Login extends Component {
  render() {
    return (
      <div className="main-page">
        <h1>登录页</h1>
        <Test />
      </div>
    )
  }
}

export default Login