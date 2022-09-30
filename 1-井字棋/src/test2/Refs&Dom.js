import React, {useRef} from "react";

// 为 DOM 元素添加 ref
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    // 创建一个 ref 来存储 textInput 的dom元素
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }
  focusTextInput() {
    // 直接使用原生api使text输入框获得焦点
    // 注意：我们通过 current 来访问dom节点
    this.textInput.current.focus()
  }
  render() {
    // 告诉react我们想把<input> ref关联到构造器里创建的textInput上
    return (
      <div>
        <input type='text' ref={this.textInput} />
        <input type='button' value="Focus th text input" onClick={this.focusTextInput} />
      </div>
    )
  }
}

// 为 class 组件添加 Ref
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

// 默认情况下，你不能在函数组件上使用 ref 属性
// 但在在函数组件内部使用 ref 属性，方式和class组件不同
function CustomTextInput2(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}


// 回调Dom Refs
function CustomTextInput3(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput3 inputRef={el => this.inputElement = el} />
    );
  }
}
// 在上面的例子中，Parent 把它的 refs 回调函数当作 inputRef props 传递给了 CustomTextInput，
// 而且 CustomTextInput 把相同的函数作为特殊的 ref 属性传递给了 <input>。结果是，
// 在 Parent 中的 this.inputElement 会被设置为与 CustomTextInput 中的 input 元素相对应的 DOM 节点。
