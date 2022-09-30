import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }
  // 组件渲染完dom运行
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  // 组件卸载运行
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    // State 的更新可能是异步的，因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
    // 错误用法
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });
    // 正确用法
    // this.setState(function(state, props) {
    //   return {
    //     counter: state.counter + props.increment
    //   };
    // });
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock