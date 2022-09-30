import React, { useState, useEffect, useMemo, useCallback } from 'react'

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