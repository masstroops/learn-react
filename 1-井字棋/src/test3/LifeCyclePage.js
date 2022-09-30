import React from "react";
import PropTypes from 'prop-types'

export default class LifeCyclePage extends React.Component {
  static defaultProps = {
    msg: 'omg'
  }
  static propTypes = {
    msg: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    console.log('constructor');
  }
  // getDerivedStateFromProps会在调用render方法之前调用，并且在初始挂载及后续更新时都会被调用，它应返回一个对象来更新state，如果返回null则不更新任何内容
  static getDerivedStateFromProps(props, state) { // 17.0版本新API
    console.log('getDerivedStateFromProps');
    const { count } = state
    return count > 5 ? { count: 0 } : count
  }
  // getSnapshotBeforeUpdate在最近一次渲染输出之前调用。它使得组件能在发生改变之前从DOM中不会一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给componentDidUpdate(prevProps,prevState,snapshot)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate',prevProps,prevState);
    return null
  }
  componentWillMount() { // 17.0版本废弃
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDisMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState
    console.log('shouldComponentUpdate');
    return count !== this.state.count
  }
  componentWillUpdate() { // 17.0版本废弃
    console.log('componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('comoponentDidUpdate',);
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('render', this.props);
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <span>{this.state.count}</span>
        <button onClick={this.setCount}>改变Count</button>
        {this.state.count % 2 && <Child count={this.state.count} />}
      </div>
    )
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmout');
  }
  // 初次渲染的时候不会执行，只会在已挂载的组件接收新的props的时候，才会执行
  componentWillReceiveProps(nextProps) { // 17.0版本废弃
    console.log('componentWillReceiveProps', nextProps);
  }
  render() {
    console.log('child render');
    return (
      <div>
        <h3>Child</h3>
        <p>{this.props.count}</p>
      </div>
    )
  }
}