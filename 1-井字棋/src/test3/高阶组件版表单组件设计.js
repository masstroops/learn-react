import React, { Component } from 'react'
import Input from './components/Input'
// import { createForm } from 'rc-form'
// rc-form 提供高阶组件，能更容易完成表单类的组件
import { createForm } from './components/my-rc-form' // 自己参照rc-form实现一个高阶表单受控组件

const nameRules = {required: true, message: '请输入姓名'}
const passwordRules = {required: true, message: '请输入密码'}

// @createForm() // rc-form提供的
@createForm
class MyRCFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usename: '',
      password: '',
    }
  }
  componentDidMount() {
    const { setFieldsValue } = this.props.form
    setFieldsValue({ username: 'default' })
  }
  submit = () => {
    const { username, password } = this.state
    const { getFieldsValue, getFieldValue, validateFields } = this.props.form
    console.log('submit',getFieldsValue(),getFieldValue('username'));
    validateFields((err, vals) => {
      if (err) {
        console.log('失败', err);
      } else {
        console.log('成功', vals);
      }
    })
  }
  nameChange = (e) => {
    this.setState({username: e.target.value})
  }
  passwordChange = (e) => {
    this.setState({username: e.target.value})
  }

  render() {
    const { username, password } = this.state
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <h3>高阶组件版表单组件设计</h3>
        {/* <Input placeholder="Username" value={username} onChange={this.nameChange} />
        <Input placeholder="Password" value={password} onChange={this.passwordChange} /> */}
        {getFieldDecorator('username', {rules: [nameRules]})(
          <Input placeholder="Username" name="username" />
        )}
        {getFieldDecorator('password', {rules: [passwordRules]})(
          <Input placeholder="Password" name="password" />
        )}
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

export default MyRCFrom