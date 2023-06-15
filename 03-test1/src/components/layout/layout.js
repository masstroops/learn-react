import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import Sider from './sider'
import './layout.less'

const { Header, Content } = Layout
const { SubMenu } = Menu

class Index extends Component {
  state = {
  }

  render() {
    const { layout, user, dispatch } = this.props
    console.log(user);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout className='site-layout'>
          <Header className='ant-layout-header' style={{ background: '#fff' }}>
            {user.userinfo.realname}
          </Header>
          <Content style={{ margin: '16px' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
    user: state.user,
  }
}

export default connect(mapStateToProps)(Index)