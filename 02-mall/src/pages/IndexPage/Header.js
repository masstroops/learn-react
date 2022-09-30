import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  back = () => {
    // 一般组件想用使用路由组件api，需要用withRouter封装
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <button onClick={this.back}>回退</button>
        <h3>Header</h3>
      </div>
    )
  }
}

export default withRouter(Header)