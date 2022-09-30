// 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧
// 具体而言，高阶组件是参数为组件，返回值为新组件的函数。
import React from 'react';

let DataSource = {
  getComments: function() {
    return Array(Math.ceil(Math.random()*5)).fill().map(item => {
      return {id: Math.random(), text: 'React真好用！666'}
    })
  },
  getBlogPost: function() {
    return Array(Math.ceil(Math.random()*5)).fill().map(item => {
      return {id: Math.random(), text: 'Vue真好用！yyds'}
    })
  },
  addChangeListener: (func) => {
    // console.log(func);
  }
}
function CommentList(props) {
  // console.log(props);
  return (
    <ul>
      {props.data.map((item, i) => {
        return <li key={item.id}>{i}、{item.text}</li>
      })}
    </ul>
  )
}
function BlogPost(props) {
  return (
    <ul>
      {props.data.map((item, i) => {
        return <li key={item.id}>{i}、{item.text}</li>
      })}
    </ul>
  )
}
// 对于订阅了 DataSource 的组件，比如 CommentList 和 BlogPost，我们可以编写一个创建组件函数。该函数将接受一个子组件作为它的其中一个参数，该子组件将订阅数据作为 prop。
export const CommentListWithSubscription = withSubscription(CommentList, (DataSource) => DataSource.getComments())
export const BlogPostWithSubscription = withSubscription(BlogPost, (DataSource, props) => DataSource.getBlogPost(props.id))

// 此函数接收一个组件
function withSubscription(WappedComponent, selectData) {
  // 并返回另一个组件
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData(DataSource, props)
      }
    }
    componentDidMount() {
      // 负责订阅相关的操作
      DataSource.addChangeListener(this.handleChange)
    }
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }
    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      })
    }
    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WappedComponent data={this.state.data} {...this.props} />
    }
  }
  // 包装显示名称以便轻松调试
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WappedComponent)})`
  return WithSubscription
}
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
