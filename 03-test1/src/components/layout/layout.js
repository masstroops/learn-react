import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import Sider from './sider'
import './layout.less'

const { Header, Content } = Layout
const { SubMenu } = Menu

class Index extends Component {
  state = {
  }

  render() {
    let routes = this.props
    console.log(routes);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout className='site-layout'>
          <Header className='ant-layout-header' style={{ backgroud: '#fff' }}>

          </Header>
          <Content style={{ margin: '16px' }}>

          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Index