import React from "react";
// 错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，
// 它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。

// 如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，
// 那么它就变成一个错误边界。当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: null, errorInfo: null}
  }
  // static getDerivedStateFromError(error) {
  //   // 更新 state 使下一次渲染能够显示降级后的 UI
  //   return { hasError: true };
  // }
  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    this.setState({
      error,
      errorInfo,
    })
  }
  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    // Normally, just render children
    return this.props.children
  }
}

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(({counter}) => {
      return {
        counter: counter + 1
      }
    })
  }
  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!')
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
  }
}

export default function WrongTest() {
  return (
    <ErrorBoundary>
      <BuggyCounter></BuggyCounter>
      {/* <BuggyCounter></BuggyCounter> */}
    </ErrorBoundary>
  )
}

