import { lazy } from 'react'
import Login from '../pages/login/login'
import Index from '../pages/index/index'

// 菜单路由
export const menus = []

// 其他
export const main = [
  { path: '/', name: '首页', component: () => import('../components/layout/layout'), routes: menus },
  { path: '/login', exact: true, name: '登录', component: () => import('../pages/login/login') },
  // { path: '/login', exact: true, name: '登录', component: <Login /> }, // 使用useRoutes去做路由时要传入组件标签
  // { path: '/login', exact: true, name: '登录', component: lazy(() => import('../pages/login/login')) },
]

export const routes = {
  main,
  menus,
}
