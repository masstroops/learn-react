import React, { Component } from 'react'
import { Button } from 'antd' // 按需引入

class AntdTest extends Component {
  render() {
    return (
      <div>
        <span>AntdTest</span>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

export default AntdTest