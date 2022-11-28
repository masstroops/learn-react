import { Component } from 'react'
import { Layout } from 'antd'
import Menu from './menu'

const { Sider } = Layout

class MySider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      theme: 'dark',
    }
  }
  onCollapse = (collapsed) => {
    this.setState({collapsed})
  }
  render() {
    const { collapsed } = this.state
    return (
      <Sider theme={this.state.theme} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className='logo'></div>
        <Menu theme={this.state.theme} />
      </Sider>
    )
  }
}

export default MySider