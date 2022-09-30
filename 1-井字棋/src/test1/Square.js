import React from 'react'

class Square extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: null,
  //   }
  // }

  clickX() {
    // 每次在组件中调用 setState 时，React 都会自动更新其子组件。
    this.setState({value: 'X'})
  }

  /**
   * 因为 DOM 元素 <button> 是一个内置组件，因此其 onClick 属性在 React 中有特殊的含义。
   * 而对于用户自定义的组件来说，命名就可以由用户自己来定义了。
   * 我们给 Square 的 onClick 和 Board 的 handleClick 赋予任意的名称，代码依旧有效。
   * 在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。
   */

  render() {
    return (
      <button
        className='square' 
      // onClick={() => this.clickX()}>
        onClick={() => this.props.onChenb()}
      >
        {/* {this.state.value} */}
        {this.props.value}
      </button>
    )
  }
}


export default Square