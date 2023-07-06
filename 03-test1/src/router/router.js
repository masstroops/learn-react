import { lazy } from 'react'
import Login from '../pages/login/login'
import Index from '../pages/index/index2'
import Layout from '../components/layout/layout'
import Notfound from '../components/others/404'

// 菜单路由
export const menus = [
  {
    path: '/index',
    name: '首页',
    component: () => import('../pages/index/index2'),
    // component: lazy(() => import('../pages/index/index2')),
    element: <Index />,
    // element: Index,
    code: 'index',
  },
  {
    path: '/list',
    name: '列表页',
    component: () => import('../pages/index/index2'),
    // component: lazy(() => import('../pages/index/index2')),
    element: <Index />,
    // element: Index,
    code: 'list',
    children: [
      {
        path: '/list/page1',
        name: '列表页1',
        component: () => import('../pages/index/index2'),
        // component: lazy(() => import('../pages/index/index2')),
        element: <Index />,
        // element: Index,
        code: 'page1',
      }
    ]
  }
]

// 其他
export const main = [
  {
    path: '/',
    redirect: '/index',
    name: '首页',
    component: () => import('../components/layout/layout'),
    element: <Layout />,
    children: menus
  },
  {
    path: '/login',
    exact: true,
    name: '登录',
    component: () => import('../pages/login/login'),
    element: <Login />,
  },
  {
    path: '*',
    name: '404',
    component: () => import('../components/others/404'),
    element: <Notfound />,
  },
  // { path: '/login', exact: true, name: '登录', component: <Login /> }, // 使用useRoutes去做路由时要传入组件标签
  // { path: '/login', exact: true, name: '登录', component: lazy(() => import('../pages/login/login')) },
]

export const routes = {
  main,
  menus,
}
