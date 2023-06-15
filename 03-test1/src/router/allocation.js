import React, { useMemo, useEffect, useState } from "react";
import { Route, Routes, Navigate, useRoutes, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch, useCommit } from 'react-redux'
import loadable from '@loadable/component' // @loadable/component 实现路由动态懒加载
import Login from '../pages/login/login'
import Index from '../pages/index/index2'
import Intercept from "./intercept";
import { Spin } from "antd";
import { http } from "../utils/http";
import { main } from './router'

const Test = () => {
  return (
    <>
      <Index />
      <Login />
    </>
  )
}

export const SubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    element={() => (
      route && route.redirect ? <Navigate to={route.redirect} replace={true} /> : <route.component />
    )}>

  </Route>
)

export const RenderRoutes = ({routes}) => {
  let location = useLocation()
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let user = useSelector(state => state.user)
  let whitePage = ['/login']
  let [menus, setMenus] = useState([main[1]])
  // let whiteMenus = [main[1]]
  // let element
  // useEffect(() => {
  //   console.log(location, user);
  //   // 判断白名单页面
  //   if (!whitePage.includes(location.pathname)) {
  //     // 判断有缓存但状态未登录
  //     if (localStorage.r_user && !user.token) {
  //       dispatch({ type: 'getuser' })
  //     }
  //     // console.log(user.token);
  //     // 判断登录
  //     if (!localStorage.r_user) {
  //       navigate('/login')
  //     } else {
  //       if (location.pathname === '/') {
  //         menus = main
  //         navigate('/index')
  //       }
  //     }
  //   }
  // }, [location])

  // element = useRoutes(main) // useRoutes没法在回调里使用，暂时不知道如何解决动态路由
  // // http().then(res => {
  // // })
  // return <>{element}</>



  useEffect(() => {
    console.log(location, user);
    // 判断白名单页面
    if (!whitePage.includes(location.pathname)) {
      // 判断有缓存但状态未登录
      if (localStorage.r_user && !user.token) {
        dispatch({ type: 'getuser' })
      }
      // console.log(user.token);
      // 判断登录
      if (!localStorage.r_user) {
        navigate('/login')
      } else {
        if (location.pathname === '/') {
          setTimeout(() => {
            setMenus(main)
            navigate('/index')
          }, 1000)
        }
      }
    }
  }, [location])

  const routerBody = useMemo(() => {
    const fellbackStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 500,
      fontSize: 24,
    };
    const routerViews = (routes) => {
      return routes.map(route => {
        // const Comp = loadable(route.component, { fallback: <Spin style={fellbackStyle} tip="页面加载中...." /> })
        // route.component = <Comp />
        if (route.children && route.children.length) {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              // element={<Intercept {...route} />}
              // element={<route.element />}
              element={route.element}
            >
              {routerViews(route.children)}
            </Route>
          )
        } else {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              // element={<Intercept {...route} />}
              // element={<route.element />}
              element={route.element}
            />
          )
        }
      })
    }
    let list1 = deepMenu(menus)
    deepMenu2(menus, [])
    console.log(list1);
    let menus3 = routerViews(list1)
    console.log(menus3);
    return menus3

    let menus2 = deepMenu(menus, [])
    console.log(menus2);
    let list = menus2.map((route, i) => {
      const Comp = loadable(route.component, { fallback: <Spin style={fellbackStyle} tip="页面加载中...." /> })
      return {
        ...route,
        component2: <Comp />
      }
    })
    return list.map((route, i) => {
        return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          element={<Intercept {...route} />} 
        />
        )
      }
    )
  }, [menus])
  return (
    <Routes>
      {/* {routes.map((route, i) => <SubRoutes key={i} {...route} />)} */}
      {/* <Route path="/login" element={<Login />} exact={false} /> */}
      <Route path="*" element={<Test />} />
      {routerBody}
      {/* {element} */}
    </Routes>
  )
}

// 递归菜单
function deepMenu(list) {
  return list.map(item => {
    if (item.children && item.children.length) {
      item.children = deepMenu(item.children)
    }
    const Comp = loadable(item.component, { fallback: <Spin tip="页面加载中...." /> })
    return {...item,component:<Comp />}
  })
}

// 递归菜单
function deepMenu2(list, rlist) {
  list.forEach(item => {
    const Comp = loadable(item.component, { fallback: <Spin tip="页面加载中...." /> })
    rlist.push({...item,component:<Comp />})
    if (item.children && item.children.length) {
      rlist.push(deepMenu(item.children))
    }
  })
  return rlist
}