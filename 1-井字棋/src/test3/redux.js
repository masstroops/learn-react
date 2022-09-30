import React from "react";
import store from "../store";

export default class ReduxPage extends React.Component {
  componentDidMount() {
    store.subscribe(() => { // 订阅
      console.log('state发生变化了');
      this.forceUpdate() // class组件强制刷新页面方法
    })
  }
  render() {
    console.log('store', store);
    return (
      <div>
        <h4>ReduxPage</h4>
        <div>{store.getState()}</div>
        <button onClick={() => store.dispatch({ type: 'ADD' })}>add</button>
      </div>
    )
  }
}