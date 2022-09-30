import React from "react";
import { connect } from 'react-redux'
// React-Redux 是 Redux 的官方 React 绑定库。它能够使你的 React 组件从 Redux store 中读取数据，并且向 store 分发 actions 以更新数据
// react-redux 是专门为react做的状态管理库

export default connect(
  // mapStateToProps 把 state映射到props
  state => ({num: state}),

  // mapDispathToProps 把 dispatch映射到props 它可以是一个函数，也可以是一个对象
  // { 对象
  //   add: () => ({type: 'ADD'})
  // }
  // (dispatch, ownProps) => { 函数
  //   return {
  //     add: () => {
  //       dispatch({ type: 'ADD' })
  //     }
  //   }
  // }
)(class ReactReduxPage extends React.Component {
  render() {
    const {num, dispatch, add} = this.props
    console.log('props', this.props);
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{num}</p>
        <button onClick={() => dispatch({type: 'ADD'})}>add</button>
        {/* <button onClick={add}>add</button> */}
      </div>
    )
  }
})