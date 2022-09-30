import React from "react";
import Board from "./Board";
import './index.scss'

/**
 * 向 DOM 内置元素 <button> 添加 onClick prop，让 React 开启对点击事件的监听。
 * 当 button 被点击时，React 会调用 Square 组件的 render() 方法中的 onClick 事件处理函数。
 * 事件处理函数触发了传入其中的 this.props.onClick() 方法。这个方法是由 Board 传递给 Square 的。
 * 由于 Board 把 onClick={() => this.handleClick(i)} 传递给了 Square，所以当 Square 中的事件处理函数触发时，其实就是触发的 Board 当中的 this.handleClick(i) 方法。
 * 现在我们还尚未定义 handleClick() 方法，所以代码还不能正常工作。如果此时点击 Square，你会在屏幕上看到红色的错误提示，提示内容为：“this.handleClick is not a function”。
 */

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default Game
