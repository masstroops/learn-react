import React, { useMemo } from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import loadable from '@loadable/component' // @loadable/component 实现路由动态懒加载
import Login from '../pages/login/login'
import Index from '../pages/index/index2'
import Intercept from "./intercept";
import { Spin } from "antd";

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
  const routerBody = useMemo(() => {
    const fellbackStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 500,
      fontSize: 24,
    };
    let list = routes.map((route, i) => {
      const Comp = loadable(route.component, { fallback: <Spin style={fellbackStyle} tip="页面加载中...." /> })
      return {
        ...route,
        component: <Comp />
      }
    })
    return list.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        element={<Intercept {...route} />} 
      />
      )
    )
  }, [routes])

  return (
    <Routes>
      {/* {routes.map((route, i) => <SubRoutes key={i} {...route} />)} */}
      {/* <Route path="/login" element={<Login />} exact={false} /> */}
      <Route path="*" element={<Test />} />
      {routerBody}
    </Routes>
  )
}
