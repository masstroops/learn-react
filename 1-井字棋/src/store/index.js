import {createStore} from 'redux'
// redux 是状态管理库，类似于vuex
// createStore 创建store
// reducer 初始化、修改状态函数
// getState 获取状态值
// dispatch 提交更新
// subscribe 变更订阅

// 定义state初始化和修改规则,reducer是一个纯函数
function counterReducer(state = 0, action) {
  console.log('state', state);
  switch(action.type) {
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}
const store = createStore(counterReducer)

export default store