// 在大多数情况下，我们推荐使用 受控组件 来处理表单数据。
// 在一个受控组件中，表单数据是由 React 组件来管理的。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。
import React from "react";

// 要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以 使用 ref 来从 DOM 节点中获取表单数据。
// 如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。否则，你应该使用受控组件。
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.input = React.createRef()
  }
  handleSubmit(e) {
    console.log(this.input.current.value);
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:<input type="text" defaultValue="Bob" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NameForm