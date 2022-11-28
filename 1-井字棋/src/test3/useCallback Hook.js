import React, { useState, useEffect, useMemo, useCallback } from 'react'

// useMemo 和 useCallback 接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据

// 共同作用：
// 1.仅仅 依赖数据 发生变化, 才会重新计算结果，也就是起到缓存的作用。

// 两者区别：
// 1.useMemo 计算结果是 return 回来的值, 主要用于 缓存计算结果的值 ，应用场景如： 需要 计算的状态
// 2.useCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。

// 注意： 不要滥用会造成性能浪费，react中减少render就能提高性能，所以这个仅仅只针对缓存能减少重复渲染时使用和缓存计算结果。
// ————————————————
// 版权声明：本文为CSDN博主「微  光」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/Web_J/article/details/116933289

function UseCallbackPage(props) {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')

  // 跟 useMemo 类似，也是优化，只会在count状态改变的时候执行
  const addClick = useCallback(() => {
    console.log('compute');
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])

  return (
    <div>
      <h3>useMemo Hook</h3>
      <p>count：{count}</p>
      <button onClick={() => setCount(count+1)}>add</button>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <Child addClick={addClick} />
    </div>
  )
}

export default UseCallbackPage

class Child extends React.PureComponent {
  render() {
    console.log('child render');
    const { addClick } = this.props
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    )
  }
}