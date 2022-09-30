// Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
// 类似于vue中的 provide/inject
import React from "react"

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
export const ThemeContext = React.createContext('light')