import axios from 'axios'
import store from '../store'
import { notification } from 'antd'

// 防抖
var debounceTimer = null
function debounce(func, wait, immediate) {
  return function () {
    let context = this;
    let args = arguments;

    if (debounceTimer) clearTimeout(debounceTimer); // timeout 不为null
    if (immediate) {
      let callNow = !debounceTimer; // 第一次会立即执行，以后只有事件执行后才会再次触发
      debounceTimer = setTimeout(function () {
        debounceTimer = null;
      }, wait)
      if (callNow) {
        func.apply(context, args)
      }
    }
    else {
      debounceTimer = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}

// 响应
const responseFun = response => {
  console.log(response);
  if (response.data.code !== 200) {
    switch (response.data.code) {
      case 500:
        notification.error({
          message: response.data.message||'服务器内部错误',
          // description: response.data.message||'服务器内部错误'
        })
      break;
      case 401:
        notification.error({
          message: '登录失败',
          description: '用户名或密码错误'
        })
        break;
      case 402:
        let fun = () => {
          notification.warning({
            message: '登录过期',
            description: '请重新登录'
          })
          store.dispatch({ type: 'clearuser' })
          setTimeout(() => {
            window.location.reload()
          }, 1000)
        }
        debounce(fun.bind(this), 500, true)()
        break;
      default:
        return Promise.resolve(response.data);
    }
    return Promise.reject(response.data)
  } else {
    return Promise.resolve(response.data)
  }
}
// 不响应
const errFun = err => {
  if (err.message.includes('timeout')) {
    notification.error({
      message: '请求超时',
      description: '请重新链接网络'
    })
    return Promise.reject(err)
  }
  let error = err.response
  try {
    if (error.data.code === 402) {
      let fun = () => {
        notification.warning({
          message: '登录过期',
          description: '请重新登录'
        })
        store.dispatch({ type: 'clearuser' })
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      }
      debounce(fun.bind(this), 500, true)()
      return Promise.reject(err)
    }
  } catch(err) {}
  if (error) {
    switch (error.status) {
      case 500:
        notification.error({
          message: '服务错误',
          description: '请检查网络或联系管理员'
        })
        break;
      case 404:
        notification.error({
          message: '网络错误',
          description: '请重新连接网络'
        })
        break;
      default:
        notification.error({
          message: error.status,
          description: '请检查网络或联系管理员'
        })
        break;
    }
  }
  return Promise.reject(err)
}

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // api base_url
  timeout: 12000 // 请求超时时间
})
service.interceptors.request.use(
  (response) => {
    // console.log(store.getState().user.token);
    // response.headers['Authorization'] = store.getState().user.token // 让每个请求header默认携带 token
    response.headers['Authorization'] = JSON.parse(localStorage.getItem('r_user')) && JSON.parse(localStorage.getItem('r_user')).token // 让每个请求header默认携带 token
    return response
  }
)
service.interceptors.response.use(
  responseFun,
  errFun
)
export {
  service as axios
}
