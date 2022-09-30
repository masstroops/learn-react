import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

class MyNavLink extends Component {
  render() {
    const { to, children } = this.props
    return (
      <NavLink activeClassName={styles.active} to={to} className={styles.link} {...this.props} >{ children }</NavLink>
    )
  }
}

export default MyNavLink