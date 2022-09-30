import React, { Component } from 'react'
import { createPortal } from 'react-dom'
// Dialog做的事情是通过调用 createPortal 吧要画的东西画在DOM树的另一个角落

class DialogTest extends Component {
  constructor(props) {
    super(props)
    this.node = document.createElement('div')
    document.body.appendChild(this.node)
  }
  componentWillUnmount() {
    if (this.node) {
      document.body.removeChild(this.node)
    }
  }
  render() {
    // 参一：需要在弹窗内渲染的内容，参二：弹窗容器
    return createPortal(
      <div>
        <h3>弹窗类组件设计实现</h3>
      </div>,
      this.node
    )
  }
}

export default DialogTest