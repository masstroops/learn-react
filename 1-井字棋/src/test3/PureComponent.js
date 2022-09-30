import React from "react";
// React.PureComponent与React.Component很相似。两者的区别在于React.Component并未实现shouldComponentUpdate()，
// 而React.PureComponent中以浅层对比prop和state的方式来实现了该函数。

export default class PureComponentPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      obj: {num: 0} // PureComponent只会处理浅层的对比，像这里的num就不会优化值相同时的性能了
    }
  }
  setCount = () => {
    // this.setCount({ count: 100 })
    this.setCount({obj: {num: 100}})
  }
  // 如果当前是Component组件需要配合shouldComponentUpdate将状态值相等的情况不进行渲染提高性能，但如果用的是PureComponent组件会自己优化此种情况
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count !== this.state.count
  // }
  render() {
    console.log('render');
    const { count } = this.state
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>{count}</button>
      </div>
    )
  }
}