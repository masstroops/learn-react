import { Component } from "react";
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu

class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log(this.props);
    // const renderMenu = (item, path) => {
    //   if (item[MENU_SHOW] === false) {
    //     return null;
    //   }
    //   if (!item.children) {
    //     return <Menu.Item key={item[MENU_KEY]} icon={<MyIcon type={item[MENU_ICON]} />}>
    //       <Link to={path + item[MENU_PATH]}>{item[MENU_TITLE]}</Link>
    //     </Menu.Item>
    //   }
    //   return (
    //     <SubMenu
    //       key={item[MENU_KEY]}
    //       title={item[MENU_TITLE]}
    //       icon={<MyIcon type={item[MENU_ICON]} />}
    //     >
    //       {item.children.map(i => renderMenu(i, path + item[MENU_PATH]))}
    //     </SubMenu>
    //   );
    // };

    // const menuComponent = () => menuList.map(m => renderMenu(m, ''))
    
    return (
      <Menu theme={this.props.theme} defaultSelectedKeys={['/user/experience']} defaultOpenKeys={['sub1']} mode="inline">
        <Menu.Item key='1'>
          <Link to='/user/WorkBench'>工作台</Link>
        </Menu.Item>
        <SubMenu key='sub1' title='用户管理'>
          <Menu.Item key='/user/experience'>
            <Link to='/user/experience'>体验用户</Link>
          </Menu.Item>
          <Menu.Item key='4'>VIP用户</Menu.Item>
          <Menu.Item key='5'>
            <Link to='/user/Details'>用户详情</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default menu;