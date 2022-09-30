import React, { Component } from 'react'
import styles from './index.module.scss'
import { withRouter } from 'react-router-dom'

const menu = [
  {title: '首页',link: '/index',icon: 'shouye'},
  {title: '购物车',link: '/cart',icon: 'gouwuche'},
  {title: '订单列表',link: '/order',icon: 'dingdan'},
  {title: '用户中心',link: '/user',icon: 'wode'},
]

class BottomNav extends Component {
  togglePage = (index) => {
    console.log(this.props);
    this.props.setActiveNum(index)
    this.props.history.push(menu[index].link)
  }
  render() {
    const { activeNum, setActiveNum } = this.props
    return (
      <div className={styles.main}>
        {
          menu.map((item, index) => (
            <MenuItem key={item.link} {...item} active={activeNum === index} onClick={() => this.togglePage(index)} />
          ))
        }
      </div>
    )
  }
}

function MenuItem({title, icon, active, onClick}) {
  return <div className={(active ? styles.selected + " " : "") + styles.menuItem} onClick={onClick}>
    <span className={'iconfont icon-'+icon}></span>
    <span className={styles.title}>{title}</span>
  </div>
}

export default withRouter(BottomNav)