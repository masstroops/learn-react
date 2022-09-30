// 术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
// 具有 render prop 的组件接受一个函数，该函数返回一个 React 元素并调用它而不是实现自己的渲染逻辑。
import React from "react";

// 为了解决状态能在其他组件共享
class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    return <img src={require('../logo192.png')} style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: '50px', height: '50px' }} alt="" />
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = { x: 0, y: 0 }
  }
  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render() {
    return (
      <div style={{height: '200px',backgroundColor: 'blue'}} onMouseDown={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h3>移动鼠标！</h3>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )} />
      </div>
    )
  }
}
export default MouseTracker