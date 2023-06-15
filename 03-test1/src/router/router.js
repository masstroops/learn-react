import { lazy } from 'react'
import Login from '../pages/login/login'
import Index from '../pages/index/index2'
import Layout from '../components/layout/layout'

// 菜单路由
export const menus = [
  {
    path: '/index',
    name: '首页',
    component: () => import('../pages/index/index2'),
    // component: lazy(() => import('../pages/index/index2')),
    element: <Index />,
    // element: Index,
  },
  {
    path: '/list',
    name: '列表页',
    component: () => import('../pages/index/index2'),
    // component: lazy(() => import('../pages/index/index2')),
    element: <Index />,
    // element: Index,
    children: [
      {
        path: '/list/page1',
        name: '列表页1',
        component: () => import('../pages/index/index2'),
        // component: lazy(() => import('../pages/index/index2')),
        element: <Index />,
        // element: Index,
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
    component: () => import('../pages/login/login'),
    element: <Login />,
  },
  // { path: '/login', exact: true, name: '登录', component: <Login /> }, // 使用useRoutes去做路由时要传入组件标签
  // { path: '/login', exact: true, name: '登录', component: lazy(() => import('../pages/login/login')) },
]

export const routes = {
  main,
  menus,
}
