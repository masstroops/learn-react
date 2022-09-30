// 包含关系，有些组件无法提前知晓它们子组件的具体内容。在 Sidebar（侧边栏）和 Dialog（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。
// 我们建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中
// 类似于VUE中的插槽
import React from "react";

// 当确定插入的地方只有一处时，使用prop.children，类似于vue默认插槽
function FancyBorder(props) {
  return (
    <div>{props.children}</div>
  )
}
function WelcomeDialog() {
  return (
    <FancyBorder>
      <h1>welcome</h1>
      <p>thank you for</p>
    </FancyBorder>
  )
}

// 当需要插入多处时，我们可以不使用 children，而是自行约定：将所需内容传入 props，并使用相应的 prop。类似于VUE命名插槽
function SplitPane(props) {
  return (
    <div>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </div>
  )
}
function Contacts() {}
function Chat() {}
function App() {
  return (
    <SplitPane left={<Contacts />} right={<Chat />}>
    </SplitPane>
  )
}
