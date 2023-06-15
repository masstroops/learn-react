import { axios } from './request'

const http = (url, method, data) => {
  if (method.toUpperCase() == 'GET') {
    return axios({
      url,
      method,
      params: data
    })
  } else if (method.toUpperCase() == 'POST') {
    return axios({
      url,
      method,
      data
    })
  }
}

const downHttp = (url, method, data) => {
  if (method.toUpperCase() == 'GET') {
    return axios({
      url,
      method,
      params: data,
      responseType: 'blob',
    })
  } else if (method.toUpperCase() == 'POST') {
    return axios({
      url,
      method,
      data,
      responseType: 'blob',
    })
  }
}

export {
  http,
  downHttp,
}