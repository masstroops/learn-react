// Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
// 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。
// 一个 portal 的典型用例是当父组件有 overflow: hidden 或 z-index 样式时，但你需要子组件能够在视觉上“跳出”其容器。例如，对话框、悬浮卡以及提示框
import React from "react";
import ReactDOM from 'react-dom';

// const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    // createPortal 会把第一个参数渲染到第二个参数内部
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    );
  }
}

class ModalBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showModal: false};
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  handleShow() {
    this.setState({showModal: true});
  }
  handleHide() {
    this.setState({showModal: false});
  }
  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null
    return (
      <div className="modal-box">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    )
  }
}

export default ModalBox