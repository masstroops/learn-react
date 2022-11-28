import React, { Component } from 'react'
import { Layout, Switch, Menu } from 'antd'
import { Link } from 'react-router-dom' 

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu

class Index extends Component {
  state = {
    collapsed: false,
    theme: 'dark',
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({collapsed})
  }
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    })
  }
  render() {
    const { collapsed } = this.state
    let routes = this.props
    console.log(routes);
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme={this.state.theme} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className='logo'></div>
          <Menu theme={this.state.theme} defaultSelectedKeys={['/user/experience']} defaultOpenKeys={['sub1']} mode="inline">
            <Menu.Item key='1'>
              <Link to='/user/WorkBench'>工作台</Link>
            </Menu.Item>
            <SubMenu key='sub1' title='用户管理'>
              <Menu.Item key='/user/experience'>
                <Link to='/user/experience'>体验用户</Link>
              </Menu.Item>
              <Menu.Item key='4'>VIP用户</Menu.Item>
              <Menu.Item key='5'>
                <Link to='/user/Details'>用户详情</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
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