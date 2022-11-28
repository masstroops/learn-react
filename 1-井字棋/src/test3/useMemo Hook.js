import React, { useState, useEffect, useMemo } from 'react'

// useMemo 用于性能优化，通过记忆值来避免在每个渲染上执⾏高开销的计算。
/**
 * 
 * 返回一个 memoized 值。
  callback是一个函数用于处理逻辑
  array 控制useMemo重新执⾏行的数组，array改变时才会 重新执行useMemo
  不传数组，每次更新都会重新计算
  空数组，只会计算一次
  依赖对应的值，当对应的值发生变化时，才会重新计算(可以依赖另外一个 useMemo 返回的值)
  useMemo的返回值是一个记忆值，是callback的返回值
  ————————————————
  版权声明：本文为CSDN博主「_Boboy」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
  原文链接：https://blog.csdn.net/weixin_43720095/article/details/104950676

  如果你之前对useEffct有了解的话，可能知道它可看成class组件里面的componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。 而useMemo则可以看作是componentWillUpdate函数
  ————————————————
  版权声明：本文为CSDN博主「Poker_旭」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
  原文链接：https://blog.csdn.net/m0_46694056/article/details/122189832
 */
function UseMemoPage(pROPS) {
  const [count, setCount] = useState(0)

  // 因为每次状态更新都会重新执行一遍该方法，但当前的计算只和count有关，此情况可以用 useMemo 进行优化
  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
    // 只有count 改变的时候，当前函数才会重新执行
  }, [count])

  const [value, setValue] = useState('')

  return (
    <div>
      <h3>useMemo Hook</h3>
      <p>count：{count}</p>
      <p>expensive：{expensive}</p>
      <button onClick={() => setCount(count+1)}>add</button>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default UseMemoPage