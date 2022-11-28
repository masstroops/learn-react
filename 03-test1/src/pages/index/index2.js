import { Component } from "react";
// react-redux在class组件修改和获取store数据写法
import { connect } from 'react-redux'
import './index.less'

class Index extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
    }
    this.changeLayout = this.changeLayout.bind(this)
  }
  changeLayout() {
    console.log(this.props);
    const { layout, dispatch } = this.props
    const temp = layout === '侧边导航' ? '顶部导航' : '侧边导航'
    dispatch({type: temp, mode: temp})
  }
  render() {
    const { layout, user, dispatch } = this.props
    return (
      <div className="con">
        <h1>首页</h1>
        <div>
          <button onClick={this.changeLayout}>切换布局</button>
          <span>布局：{layout}</span>
        </div>
        <div>
          用户：{user.name}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
    user: state.user,
  }
}

export default connect(mapStateToProps)(Index)