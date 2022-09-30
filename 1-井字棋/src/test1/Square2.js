/**
 * 如果你想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单。
 * 我们不需要定义一个继承于 React.Component 的类，我们可以定义一个函数，这个函数接收 props 作为参数，
 * 然后返回需要渲染的元素。函数组件写起来并不像 class 组件那么繁琐，很多组件都可以使用函数组件来写。
 */

 function Square(props) {
  return (
    <button className="square" onClick={props.onChenb}>
      {props.value}
    </button>
  );
}

export default Square