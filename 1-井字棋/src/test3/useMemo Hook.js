import React, { useState, useEffect, useMemo } from 'react'

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