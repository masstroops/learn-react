// React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
// 因为组件返回的模板下也必须是只有一个节点，跟vue2一样，Fragment标签可以解决根节点的问题并且不会创建dom元素
import React from "react";

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>world</td>
      </React.Fragment>
    )
  }
}

// 你可以像使用任何其他元素一样使用 <> </>，除了它不支持 key 或属性。
// class Columns extends React.Component {
//   render() {
//     return (
//       <>
//         <td>Hello</td>
//         <td>World</td>
//       </>
//     );
//   }
// }

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}